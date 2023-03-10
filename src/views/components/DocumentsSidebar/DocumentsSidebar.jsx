import styles from "./DocumentsSidebar.module.css";
import { useEffect, useState } from "react";
import { AxiosInstance } from "../../../assets/script/js/axios/BaseAxios";
const DocumentsSidebar = ({ lessonId, setActiveItem, refetch, setRefetch }) => {
  const [docs, setDocs] = useState([]);

  const updateDocs = () => {
    // fetch lesson data
    AxiosInstance.get(`/lesson/findById/${lessonId}`, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("Auth")}`,
      },
    })
      .then((res) => {
        console.log(res);
        setDocs(res.data.lessonDocs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    updateDocs();
  }, [lessonId]);

  useEffect(() => {
    if (refetch) {
      setRefetch(false);
      updateDocs();
    }
  }, [refetch]);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
      {docs.map((d, index) => (
        <button
          onClick={() => setActiveItem({ type: "Document", _id: d._id })}
          className={styles.docButton}
        >
          PDF {index + 1}
        </button>
      ))}
    </div>
  );
};

export default DocumentsSidebar;
