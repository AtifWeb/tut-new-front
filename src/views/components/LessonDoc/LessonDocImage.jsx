import styles from "./LessonDoc.module.css";
import SketchField from "../Whiteboard/SketchField";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";
import { mapToArray } from "../Whiteboard/utils";
import { SERVER_BASE_URL } from "../../../config";
import io from "socket.io-client";
import DeleteIcon from "@material-ui/icons/Delete";
const LessonDocImage = ({ docId, imageIndex, imageSrc, selectedTool }) => {
  const sketch = useRef();
  const socketRef = useRef();
  const [boardData, setBoardData] = useState({});
  const [userType] = useState(
    window.sessionStorage.getItem("UserType") || "Teacher"
  );
  const objectMap = useRef(new Map());

  useEffect(() => {
    if (sketch.current) {
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
      socket.emit(
        "lesson-doc-image:subscribe",
        { lessonDocId: docId, imgIndex: imageIndex },
        () => {}
      );

      // listen to lesson doc image change event
      socket.on("lesson-doc-image:changed", (data) => {
        console.log("changed", data);
        changeFromRemote(data);
      });

      // listen to whiteboard update events
      socket.on("lesson-doc-image:updated", (data) => {
        console.log("updated", data);
        updateFromRemote(data);
      });
    }

    return () => {
      socketRef.current.disconnect();
      objectMap.current.clear();
      changeBoardData(true);
    };
  }, [docId, imageIndex]);

  function changeBoardData(updateCanvas = false) {
    const newObjectsState = mapToArray(objectMap.current);
    const newState = { ...boardData, objects: newObjectsState };
    setBoardData(newState);
    if (updateCanvas) {
      sketch.current.fromJSON(newState);
    }
    setBoardData(newState);
  }

  function changeFromRemote(data) {
    objectMap.current.clear();
    if (data) {
      const { objects, ...meta } = data;
      if (objects) {
        Object.values(objects).forEach((obj) => {
          objectMap.current.set(obj.uid, obj);
        });
      }
      setBoardData({ ...meta });
    }
    changeBoardData(true);
  }

  function updateFromRemote(changed) {
    // update object map
    changed.forEach((obj) => {
      objectMap.current.set(obj.uid, obj);
    });
    changeBoardData(true);
  }

  function onCanvasChange() {
    const newState = sketch.current.toJSON();

    /** check for state changes **/
    if (!_.isEqual(newState, boardData)) {
      const changedObjects = [];
      const { objects, ...meta } = newState;
      objects?.forEach((obj) => {
        const previousObj = objectMap.current.get(obj.uid);
        if (!_.isEqual(obj, previousObj)) {
          changedObjects.push(obj);
          objectMap.current.set(obj.uid, obj);
        }
      });
      setBoardData({ ...boardData, ...meta });
      if (changedObjects.length > 0) {
        //add new objects to server lesson doc
        socketRef.current.emit(
          "lesson-doc-image:update",
          {
            lessonDocId: docId,
            imgIndex: imageIndex,
            data: changedObjects,
          },
          () => {}
        );
        changeBoardData();
      }
    }
  }

  function clearData() {
    objectMap.current.clear();
    changeBoardData(true);
    const { objects, ...meta } = boardData;
    socketRef.current.emit(
      "lesson-doc-image:change",
      {
        lessonDocId: docId,
        imgIndex: imageIndex,
        data: { ...meta, objects: {} },
      },
      () => {}
    );
  }

  return (
    <div>
      <div className={styles.imageContainer}>
        <button onClick={clearData} className={styles.clearbutton}>
          <DeleteIcon />
        </button>
        <img
          className={styles.image}
          src={`${SERVER_BASE_URL}api/${imageSrc}`}
        />
        <SketchField
          width="100%"
          height="100%"
          ref={(c) => (sketch.current = c)}
          tool={selectedTool}
          lineColor="red"
          onChange={onCanvasChange}
          lineWidth={3}
        />
      </div>
    </div>
  );
};

export default LessonDocImage;
