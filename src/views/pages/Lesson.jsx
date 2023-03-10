import { useEffect, useRef, useState } from "react";
import { SketchField } from "../components/Whiteboard/SketchField";
import Tools from "../components/Whiteboard/tools";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import { SERVER_BASE_URL } from "../../config";
import { AxiosInstance } from "../../assets/script/js/axios/BaseAxios";
import Whiteboard from "../components/Whiteboard/Whiteboard";

const Lesson = () => {
  const { id: lessonId } = useParams();
  const sketch = useRef();
  const socketRef = useRef();
  const [lesson, setLesson] = useState(undefined);
  const [boardData, setBoardData] = useState({});
  const [userType, _setUserType] = useState(
    window.sessionStorage.getItem("UserType") || "Teacher"
  );

  useEffect(() => {
    // fetch lesson data
    AxiosInstance.get(`/lesson/findById/${lessonId}`, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("Auth")}`,
      },
    })
      .then((res) => {
        setLesson(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lessonId, userType]);

  return !!lesson ? (
    <Whiteboard lessonId={lesson._id} />
  ) : (
    <div>loading lesson {lessonId}</div>
  );
};

export default Lesson;
