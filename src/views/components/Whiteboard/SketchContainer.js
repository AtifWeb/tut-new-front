import _ from "lodash";
import {mapToArray} from "./utils";
import {useEffect, useRef, useState} from "react";
import io from "socket.io-client";
import {SERVER_BASE_URL} from "../../../config";
import SketchField from "./SketchField";

const SketchContainer = ({lesson, selectedTool, onClearCommand, setClearCommand}) => {

    const sketch = useRef();
    const socketRef = useRef();
    const [boardData, setBoardData] = useState({});
    const [userType] = useState(
        window.sessionStorage.getItem("UserType") || "Teacher"
    );
    const objectMap = useRef(new Map());

    useEffect(() => {
        if(onClearCommand) {
            setClearCommand(false);
            clearData();
        }
    }, [onClearCommand])

    useEffect(() => {
        if (sketch.current) {
            if (lesson) {
                //get token from session storage
                const jwt = window.sessionStorage.getItem("Auth");

                //todo: save usertype on the localstorage at login and get that value here

                // connect to socket with jwt token and user type teacher
                // todo: store server url separately
                const socket = io(SERVER_BASE_URL, {
                    auth: {
                        token: jwt,
                        userType,
                    },
                });
                socketRef.current = socket;

                socket.on("connect_error", (err) => console.log(err));

                socket.connect();

                // subscribe to a whiteboard with id
                socket.emit("whiteboard:subscribe", lesson.whiteboard._id, () => {
                });

                // listen to whiteboard change event
                socket.on("whiteboard:changed", (data) => {
                    changeFromRemote(data);
                });

                // listen to whiteboard update events
                socket.on("whiteboard:updated", (data) => {
                    updateFromRemote(data);
                });
            }
        }
    }, [userType, lesson])

    function onCanvasChange() {
        const newState = sketch.current.toJSON();

        /** check for state changes **/
        if (!_.isEqual(newState, boardData)) {
            const changedObjects = [];
            const {objects, ...meta} = newState;
            objects?.forEach((obj) => {
                const previousObj = objectMap.current.get(obj.uid);
                if (!_.isEqual(obj, previousObj)) {
                    changedObjects.push(obj);
                    objectMap.current.set(obj.uid, obj);
                }
            });
            setBoardData({...boardData, ...meta});
            if (changedObjects.length > 0) {
                // add new objects to server whiteboard
                socketRef.current.emit(
                    "whiteboard:update",
                    {
                        whiteboardId: lesson.whiteboard._id,
                        data: changedObjects,
                    },
                    () => {
                    }
                );
                changeBoardData();
            }
        }
    }


    function clearData() {
        objectMap.current.clear();
        changeBoardData(true);
        const {objects, ...meta} = boardData;
        socketRef.current.emit(
            "whiteboard:change",
            {
                whiteboardId: lesson.whiteboard._id,
                data: {...meta, objects: {}},
            },
            () => {
            }
        );
    }

    function changeFromRemote(data) {
        const {objects, ...meta} = data;
        objectMap.current.clear();
        if (objects) {
            Object.values(objects).forEach((obj) => {
                objectMap.current.set(obj.uid, obj);
            });
        }
        setBoardData({...meta});
        changeBoardData(true);
    }

    function updateFromRemote(changed) {
        // update object map
        changed.forEach((obj) => {
            objectMap.current.set(obj.uid, obj);
        });
        changeBoardData(true);
    }

    function changeBoardData(updateCanvas = false) {
        const newObjectsState = mapToArray(objectMap.current);
        const newState = {...boardData, objects: newObjectsState};
        setBoardData(newState);
        if (updateCanvas) {
            sketch.current.fromJSON(newState);
        }
        setBoardData(newState);
    }

    return (
        <SketchField
            width="100%"
            height="100%"
            ref={(c) => (sketch.current = c)}
            tool={selectedTool}
            lineColor="red"
            onChange={onCanvasChange}
            lineWidth={3}
        />
    )
}

export default SketchContainer;