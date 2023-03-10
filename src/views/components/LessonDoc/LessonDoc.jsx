import { useEffect, useRef, useState } from "react";
import { AxiosInstance } from "../../../assets/script/js/axios/BaseAxios";
import styles from "./LessonDoc.module.css";
import LessonDocImage from "./LessonDocImage";
import io from "socket.io-client";
import { SERVER_BASE_URL } from "../../../config";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
const LessonDoc = ({ docId, selectedTool }) => {
  const socketRef = useRef();
  const [lessonDoc, setLessonDoc] = useState(undefined);
  const [selectedPage, setSelectedPage] = useState(0);
  const [userType] = useState(
    window.sessionStorage.getItem("UserType") || "Teacher"
  );

  // fetch lesson doc data
  useEffect(() => {
    AxiosInstance.get(`lesson/doc/id/${docId}`, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("Auth")}`,
      },
    })
      .then((res) => {
        setLessonDoc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [docId]);

  useEffect(() => {
    if (lessonDoc) {
      //get token from session storage
      const jwt = window.sessionStorage.getItem("Auth");

      //todo: save usertype on the localstorage at login and get that value here

      // connect to socket with jwt token and user type teacher
      const socket = io(SERVER_BASE_URL, {
        auth: {
          token: jwt,
          userType,
        },
      });

      socketRef.current = socket;

      socket.on("connect_error", (err) => console.log(err));

      socket.connect();

      // subscribe to a lesson doc with id
      socket.emit("lesson-doc:subscribe", lessonDoc._id, () => {});

      // listen to lesson doc active image change event
      socket.on("lesson-doc:activeIndexUpdated", (data) => {
        setSelectedPage(data);
      });
    }
  }, [userType, lessonDoc]);

  const updateSelectedPage = (page) => {
    // update active image on server if user is a teacher
    if (userType === "Teacher") {
      socketRef.current.emit(
        "lesson-doc:activeIndexUpdate",
        {
          lessonDocId: lessonDoc._id,
          page,
        },
        () => {}
      );
    }
    setSelectedPage(page);
  };

  return lessonDoc ? (
    <div className={styles.LessonDoc}>
      lesson doc
      <LessonDocImage
        docId={lessonDoc._id}
        imageIndex={selectedPage}
        imageSrc={lessonDoc.images[selectedPage]}
        selectedTool={selectedTool}
      />
      <div className={styles.LessonDocButtons}>
        <button onClick={() => updateSelectedPage(selectedPage - 1)}>
          <KeyboardArrowLeftIcon />
        </button>
        <span className={styles.paginationView}>Page {selectedPage + 1}</span>
        <button onClick={() => updateSelectedPage(selectedPage + 1)}>
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default LessonDoc;
