import { useEffect, useRef, useState } from "react";
import { SketchField } from "./SketchField";
import _ from "lodash";

import { AxiosInstance } from "../../../assets/script/js/axios/BaseAxios";

import styles from "./whiteboard.module.css";
import { Button, ButtonGroup } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

import WallpaperIcon from "@material-ui/icons/Wallpaper";
import AssignmentIcon from "@material-ui/icons/Assignment";
import GestureIcon from "@material-ui/icons/Gesture";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import SelectAllIcon from "@material-ui/icons/SelectAll";

import { Link, useParams } from "react-router-dom";
import axios from "axios";

import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import DocumentsSidebar from "../DocumentsSidebar/DocumentsSidebar";
import LessonDoc from "../LessonDoc/LessonDoc";
import SketchContainer from "./SketchContainer";

const VideoStyles = {
  video: {
    width: 200,
    height: 200,
  },
};
const Whiteboard = ({ lessonId }) => {
  const { id } = useParams();

  const [lesson, setLesson] = useState(undefined);
  const [DynamicImages, setDynamicImages] = useState([]);
  const [loader, setloader] = useState(false);
  const [popUp, setpopUp] = useState(false);
  const [Images, setImages] = useState([]);
  const [SelectionPdfImages, setSelectionPdfImages] = useState([]);
  const [clearCommand, setClearCommand] = useState(false);
  const [userType] = useState(
    window.sessionStorage.getItem("UserType") || "Teacher"
  );

  const [screenType, setScreenType] = useState("Whiteboard");
  const [activeItem, setActiveItem] = useState({ type: "Whiteboard" });

  const [refetchDocs, setRefetchDocs] = useState(false);

  const [tools] = useState([
    "computer",
    "colors",
    "Pencil",
    "Highlighter",
    "erase",
    "touch",
    "text",
    "file",
    "back_reverse",
    "front_forward",
    "Arrow",
    "Circle",

    "Line",
    "Pan",

    "Rectangle",
    "Select",
    "grid",
    "user_done",
    "message",
  ]);
  const [selectedTool, setSelectedTool] = useState("Pencil");
  const [screen, setscreen] = useState([
    {
      information: "Any Information",
    },
  ]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    let File = document.querySelector("#file_submit").files[0];
    let formdata = new FormData();

    if (File["type"] == "application/pdf") {
      formdata.append("name", "Amir Butt");
      formdata.append("lesson", id);

      formdata.append("doc", File);

      setloader(true);

      axios
        .post(
          `https://tutorial-server33.herokuapp.com/api/lesson/doc/create`,
          formdata,
          {
            headers: {
              Authorization: `Bearer ${window.sessionStorage.getItem("Auth")}`,
            },
          }
        )
        .then((res) => {
          let Images = res["data"]["images"];
          setloader(false);
          console.log(Images);
          setDynamicImages(Images);
          setRefetchDocs(true);
        })
        .catch((err) => console.log(err));
    } else {
      window.alert("Not Pdf File");
    }
  };

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

  // videos stream
  const HandleStream = (stream) => {
    const video = document.querySelector("video");
    video.srcObject = stream;
    video.play();
  };

  // stream start
  const startStream = async () => {
    const Videostream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    let AudioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    HandleStream(Videostream);
  };

  // use effect
  useEffect(() => {
    if (
      "mediaDevices" in navigator &&
      "getUserMedia" in navigator.mediaDevices
    ) {
      startStream();
    }
  }, []);
  return (
    <div>
      {loader && (
        <div className={styles.loader}>
          <div className={styles.loaderPure}>
            <HourglassEmptyIcon style={{ fontSize: "50px" }} />
          </div>
        </div>
      )}
      {popUp && (
        <div className={styles.selection_img_popup}>
          <div className={styles.imgWrapper}>
            {Images.map((EachImg) => (
              <img src={EachImg} className="pdf_to_img" />
            ))}
          </div>
          <div className={styles.bottomButtom}>
            <button
              onClick={(e) => {
                setSelectionPdfImages(Images);
                setpopUp(false);
              }}
            >
              Select All
            </button>
            <button
              onClick={(e) => {
                setpopUp(false);
              }}
            >
              Select
            </button>
          </div>
        </div>
      )}

      <div className={styles.contentWrapper}>
        <header>
          <Link>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              _ngcontent-yam-c156=""
            >
              <path
                d="M21 3.01001H3C1.9 3.01001 1 3.91001 1 5.01001V8.00001C1 8.55001 1.45 9.00001 2 9.00001C2.55 9.00001 3 8.55001 3 8.00001V5.99001C3 5.44001 3.45 4.99001 4 4.99001H20C20.55 4.99001 21 5.44001 21 5.99001V18.02C21 18.57 20.55 19.02 20 19.02H4C3.45 19.02 3 18.57 3 18.02V16C3 15.45 2.55 15 2 15C1.45 15 1 15.45 1 16V19.01C1 20.1 1.89 20.99 2.98 20.99H21C22.1 20.99 23 20.09 23 18.99V5.01001C23 3.91001 22.1 3.01001 21 3.01001Z"
                fill="black"
                fill-opacity="0.54"
                _ngcontent-yam-c156=""
              ></path>
              <path
                d="M5.94004 9.14464L3.15004 11.9346C2.95004 12.1346 2.95004 12.4446 3.15004 12.6446L5.94004 15.4346C6.25004 15.7546 6.79004 15.5346 6.79004 15.0846L6.79004 13.2946L15.79 13.2946C16.34 13.2946 16.79 12.8446 16.79 12.2946C16.79 11.7446 16.34 11.2946 15.79 11.2946L6.79004 11.2946L6.79004 9.50464C6.79004 9.05465 6.25004 8.83464 5.94004 9.14464Z"
                fill="black"
                fill-opacity="0.54"
                _ngcontent-yam-c156=""
              ></path>
            </svg>
            Close
          </Link>
        </header>
        <div className={styles.boardContainer}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarButtonsWrapper}>
              <button
                onClick={() => setScreenType("Whiteboard")}
                className={screenType == "Whiteboard" && styles.active}
              >
                <AssignmentIcon />
              </button>
              <button
                onClick={() => setScreenType("Documents")}
                className={screenType == "Documents" && styles.active}
              >
                <WallpaperIcon />
              </button>
            </div>
            {screenType === "Whiteboard" ? (
              <>
                {screen.map((EachScreen, index) => (
                  <div
                    className={styles.screen}
                    onClick={() => setActiveItem({ type: "Whiteboard" })}
                  >
                    <p>{index + 1}</p>
                  </div>
                ))}

                <div
                  className={`${styles.screen} ${styles.plus}`}
                  onClick={(e) =>
                    setscreen([
                      ...screen,
                      {
                        information: "Any Information",
                      },
                    ])
                  }
                >
                  <p>+</p>
                </div>
              </>
            ) : (
              <DocumentsSidebar
                lessonId={lesson?._id}
                setActiveItem={setActiveItem}
                refetch={refetchDocs}
                setRefetch={setRefetchDocs}
              />
            )}
          </div>
          {activeItem.type === "Whiteboard" ? (
            <SketchContainer
              lesson={lesson}
              selectedTool={selectedTool}
              onClearCommand={clearCommand}
              setClearCommand={setClearCommand}
            />
          ) : (
            <LessonDoc docId={activeItem._id} selectedTool={selectedTool} />
          )}
        </div>
        <div className={styles.videoWrapper}>
          <video style={VideoStyles.video}></video>
          <span className={styles.Mic}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              _ngcontent-dxq-c163=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.8252 11.4947C14.8252 13.1722 13.471 14.5263 11.7936 14.5263C10.1161 14.5263 8.762 13.1722 8.762 11.4947V5.43157C8.762 3.7541 10.1161 2.39999 11.7936 2.39999C13.471 2.39999 14.8252 3.7541 14.8252 5.43157V11.4947ZM16.7757 12.3537C16.8565 11.8585 17.2708 11.4947 17.766 11.4947C18.3824 11.4947 18.8776 12.0404 18.7765 12.6467C18.2814 15.6783 15.8561 18.053 12.8043 18.4876V20.5895C12.8043 21.1453 12.3496 21.6 11.7938 21.6C11.238 21.6 10.7833 21.1453 10.7833 20.5895V18.4876C7.73147 18.053 5.30621 15.6783 4.81105 12.6467C4.7201 12.0404 5.20515 11.4947 5.82157 11.4947C6.31673 11.4947 6.73105 11.8585 6.81189 12.3537C7.22621 14.7284 9.29778 16.5474 11.7938 16.5474C14.2898 16.5474 16.3614 14.7284 16.7757 12.3537Z"
                fill="white"
                _ngcontent-dxq-c163=""
              ></path>
            </svg>
          </span>
          <span className={styles.VideoIcon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              _ngcontent-dxq-c163=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.70212 4.15904C2.29916 3.75608 2.29916 3.10515 2.70212 2.7022C2.89516 2.50872 3.15724 2.39999 3.43054 2.39999C3.70385 2.39999 3.96592 2.50872 4.15896 2.7022L21.0211 19.5747C21.4241 19.9777 21.4241 20.6286 21.0211 21.0315C20.6182 21.4345 19.9672 21.4345 19.5643 21.0315L17.0019 18.4692C16.8366 18.5725 16.6506 18.6551 16.4336 18.6551H4.03498C3.4667 18.6551 3.00175 18.1902 3.00175 17.6219V7.2897C3.00175 6.72143 3.4667 6.25648 4.03498 6.25648H4.78923L2.70212 4.15904ZM21.6001 9.26302V14.7288C21.6001 15.6483 20.4842 16.1133 19.8436 15.4623L10.6376 6.25634H16.434C17.0022 6.25634 17.4672 6.72129 17.4672 7.28957V10.9058L19.8333 8.52943C20.4842 7.8785 21.6001 8.34345 21.6001 9.26302Z"
                fill="white"
                _ngcontent-dxq-c163=""
              ></path>
            </svg>
          </span>
        </div>

        <div className={styles.toolBar} id="whiteboard-video">
          <div>
            <ButtonGroup size="small" aria-label="small outlined button group">
              {tools.map((k) => (
                <Button
                  key={k}
                  onClick={() => setSelectedTool(k)}
                  className={styles.inputTool}
                >
                  {k == "computer" && (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      _ngcontent-yam-c93=""
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.33333 9.33331C5.33333 8.59998 5.93333 7.99998 6.66667 7.99998H28C28.7333 7.99998 29.3333 7.39998 29.3333 6.66665C29.3333 5.93331 28.7333 5.33331 28 5.33331H5.33333C3.86667 5.33331 2.66667 6.53331 2.66667 7.99998V22.6666H2C0.893333 22.6666 0 23.56 0 24.6666C0 25.7733 0.893333 26.6666 2 26.6666H16.6667C17.7733 26.6666 18.6667 25.7733 18.6667 24.6666C18.6667 23.56 17.7733 22.6666 16.6667 22.6666H5.33333V9.33331ZM30.6667 10.6666H22.6667C21.9333 10.6666 21.3333 11.2666 21.3333 12V25.3333C21.3333 26.0666 21.9333 26.6666 22.6667 26.6666H30.6667C31.4 26.6666 32 26.0666 32 25.3333V12C32 11.2666 31.4 10.6666 30.6667 10.6666ZM24 22.6666H29.3333V13.3333H24V22.6666Z"
                        fill="white"
                        _ngcontent-yam-c93=""
                      ></path>
                    </svg>
                  )}
                  {k == "colors" && (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      _ngcontent-yam-c93=""
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.66675 16C2.66675 8.62669 8.62675 2.66669 16.0001 2.66669C23.3734 2.66669 29.3334 8.62669 29.3334 16C29.3334 23.3734 23.3734 29.3334 16.0001 29.3334C8.62675 29.3334 2.66675 23.3734 2.66675 16ZM5.33341 16C5.33341 21.88 10.1201 26.6667 16.0001 26.6667C21.8801 26.6667 26.6667 21.88 26.6667 16C26.6667 10.12 21.8801 5.33335 16.0001 5.33335C10.1201 5.33335 5.33341 10.12 5.33341 16Z"
                        fill="white"
                        _ngcontent-yam-c93=""
                      ></path>
                      <circle
                        cx="16"
                        cy="16"
                        r="10"
                        fill="black"
                        _ngcontent-yam-c93=""
                      ></circle>
                    </svg>
                  )}
                  {k == "text" && (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      _ngcontent-yam-c93=""
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M26.24 3.20001H5.75995C4.35195 3.20001 3.19995 4.35201 3.19995 5.76001V26.24C3.19995 27.648 4.35195 28.8 5.75995 28.8H26.24C27.648 28.8 28.7999 27.648 28.7999 26.24V5.76001C28.7999 4.35201 27.648 3.20001 26.24 3.20001ZM18.6497 17.9201L16.0001 10.8545L13.3505 17.9201H18.6497ZM19.5968 20.48L20.7488 23.5264C20.9408 24 21.4016 24.32 21.9136 24.32C22.784 24.32 23.3856 23.4368 23.0656 22.6304L17.6256 8.79361C17.3568 8.11521 16.7168 7.68001 16 7.68001C15.2832 7.68001 14.6432 8.11521 14.3616 8.79361L8.92156 22.6304C8.60156 23.4368 9.20316 24.32 10.0736 24.32C10.5984 24.32 11.0592 24 11.2384 23.5136L12.3776 20.48H19.5968Z"
                        fill="white"
                        _ngcontent-yam-c93=""
                      ></path>
                    </svg>
                  )}
                  {k == "file" && (
                    <label htmlFor="file_submit" style={{ marginTop: 8 }}>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        _ngcontent-yam-c93=""
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M28.8 6.04446V25.9556C28.8 27.52 27.52 28.8 25.9555 28.8H6.0444C4.47995 28.8 3.19995 27.52 3.19995 25.9556V6.04446C3.19995 4.48001 4.47995 3.20001 6.0444 3.20001H25.9555C27.52 3.20001 28.8 4.48001 28.8 6.04446ZM14.5776 22.4143L11.5909 18.816C11.2922 18.4605 10.7518 18.4747 10.4816 18.8445L6.94024 23.3956C6.57046 23.8649 6.89758 24.5476 7.49491 24.5476H24.5474C25.1305 24.5476 25.4718 23.8791 25.1162 23.4098L20.1242 16.7538C19.8398 16.3698 19.2709 16.3698 18.9865 16.7396L14.5776 22.4143Z"
                          fill="white"
                          _ngcontent-yam-c93=""
                        ></path>
                      </svg>{" "}
                      <input
                        type="file"
                        className=""
                        id="file_submit"
                        style={{ display: "none" }}
                        onChange={HandleSubmit}
                      />
                    </label>
                  )}
                  {k == "back_reverse" && (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      _ngcontent-yam-c93=""
                    >
                      <path
                        d="M16.5946 11.7333C13.2141 11.7333 10.1524 12.9963 7.79242 15.0501L5.38137 12.6391C4.57769 11.8354 3.19995 12.3967 3.19995 13.5321V20.6631C3.19995 21.3648 3.77401 21.9388 4.47564 21.9388H11.6067C12.7421 21.9388 13.3161 20.5611 12.5124 19.7574L10.0759 17.3208C11.8491 15.841 14.1071 14.9225 16.6074 14.9225C20.6386 14.9225 24.1212 17.2698 25.7796 20.6631C26.124 21.3775 26.9404 21.7347 27.6931 21.4796C28.5988 21.1862 29.0581 20.1529 28.6499 19.2854C26.4557 14.8205 21.8887 11.7333 16.5946 11.7333Z"
                        fill="white"
                        _ngcontent-yam-c93=""
                      ></path>
                    </svg>
                  )}
                  {k == "front_forward" && (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      _ngcontent-yam-c93=""
                    >
                      <path
                        d="M24.2052 15.0518C21.844 12.9969 18.7808 11.7333 15.3986 11.7333C10.0891 11.7333 5.51986 14.822 3.35012 19.3019C2.9417 20.1571 3.40117 21.1781 4.30736 21.4844C5.06039 21.7397 5.87723 21.3823 6.22184 20.6676C7.88106 17.2726 11.3654 14.9241 15.3986 14.9241C17.8874 14.9241 20.1593 15.8431 21.9333 17.3236L19.4956 19.7614C18.6915 20.5655 19.2531 21.9439 20.389 21.9439H27.5236C28.2256 21.9439 28.8 21.3696 28.8 20.6676V13.5329C28.8 12.397 27.4215 11.8227 26.6174 12.6268L24.2052 15.0518Z"
                        fill="white"
                        _ngcontent-yam-c93=""
                      ></path>
                    </svg>
                  )}
                  {k == "Arrow" && <ArrowUpwardIcon />}
                  {k == "Circle" && <RadioButtonUncheckedIcon />}
                  {k == "Highlighter" && (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      _ngcontent-dxq-c93=""
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.3326 4.00033C17.3326 3.26699 16.7326 2.66699 15.9993 2.66699C15.266 2.66699 14.666 3.26699 14.666 4.00033V5.33366C14.666 6.06699 15.266 6.66699 15.9993 6.66699C16.7326 6.66699 17.3326 6.06699 17.3326 5.33366V4.00033ZM11.9993 22.667L8.38598 19.0537C8.14598 18.8137 7.99932 18.467 7.99932 18.1203V13.3337C7.99932 12.6003 8.59932 12.0003 9.33265 12.0003H22.666C23.3993 12.0003 23.9993 12.6003 23.9993 13.3337V18.107C23.9993 18.467 23.866 18.8003 23.6126 19.0537L19.9993 22.667V28.0003C19.9993 28.7337 19.3993 29.3337 18.666 29.3337H13.3326C12.5993 29.3337 11.9993 28.7337 11.9993 28.0003V22.667ZM5.61264 6.89364C6.13264 6.37364 6.97264 6.37364 7.50597 6.89364L8.45264 7.84031C8.97264 8.36031 8.97264 9.20031 8.45264 9.72031C7.93264 10.2403 7.09264 10.2403 6.57264 9.72031L5.61264 8.77364C5.36297 8.52453 5.22266 8.18633 5.22266 7.83364C5.22266 7.48095 5.36297 7.14275 5.61264 6.89364ZM24.506 6.89364L23.5593 7.84031C23.3096 8.08941 23.1693 8.42762 23.1693 8.78031C23.1693 9.133 23.3096 9.4712 23.5593 9.72031C24.0793 10.2403 24.9193 10.2403 25.4393 9.72031L26.386 8.77364C26.906 8.25364 26.906 7.41364 26.386 6.89364C25.866 6.37364 25.026 6.37364 24.506 6.89364Z"
                        fill="white"
                        _ngcontent-dxq-c93=""
                      ></path>
                    </svg>
                  )}

                  {k == "touch" && (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      _ngcontent-yam-c93=""
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.4024 8V12.9867C9.78903 11.9067 8.7357 10.08 8.7357 8C8.7357 4.68 11.4157 2 14.7357 2C18.0557 2 20.7357 4.68 20.7357 8C20.7357 10.08 19.6824 11.9067 18.069 12.9867V8C18.069 6.16 16.5757 4.66667 14.7357 4.66667C12.8957 4.66667 11.4024 6.16 11.4024 8ZM17.549 16C17.9624 16 18.3624 16.0933 18.7357 16.28L24.1757 18.9867C25.2024 19.4933 25.789 20.6133 25.629 21.7467L24.789 27.7067C24.6024 29.0267 23.4824 30 22.149 30H14.0157C13.309 30 12.629 29.72 12.1224 29.2267L6.7757 23.88C6.20237 23.2933 6.20237 22.36 6.7757 21.7733C7.1357 21.4133 7.6557 21.2533 8.14904 21.36L12.7357 22.32V8C12.7357 6.89333 13.629 6 14.7357 6C15.8424 6 16.7357 6.89333 16.7357 8V16H17.549Z"
                        fill="white"
                        _ngcontent-yam-c93=""
                      ></path>
                    </svg>
                  )}

                  {k == "Line" && <GestureIcon />}
                  {k == "Pan" && (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      _ngcontent-dxq-c93=""
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.9989 12H13.9989C13.6256 12 13.3322 11.7067 13.3322 11.3333V8.00001H10.9456C10.3456 8.00001 10.0522 7.28001 10.4656 6.86668L15.5189 1.81334C15.7856 1.54668 16.1989 1.54668 16.4655 1.81334L21.5189 6.86668C21.9455 7.28001 21.6522 8.00001 21.0522 8.00001H18.6656V11.3333C18.6656 11.7067 18.3722 12 17.9989 12ZM7.99897 13.3334H11.3323C11.7056 13.3334 11.999 13.6267 11.999 14V18C11.999 18.3734 11.7056 18.6667 11.3323 18.6667H7.99897V21.0534C7.99897 21.6534 7.27897 21.9467 6.86564 21.5334L1.8123 16.48C1.54564 16.2134 1.54564 15.8 1.8123 15.5334L6.86564 10.48C7.27897 10.0534 7.99897 10.3467 7.99897 10.9467V13.3334ZM30.199 15.5334L25.1456 10.48C24.719 10.0534 23.999 10.3467 23.999 10.9467V13.3334H20.6656C20.2923 13.3334 19.999 13.6267 19.999 14V18C19.999 18.3734 20.2923 18.6667 20.6656 18.6667H23.999V21.0534C23.999 21.6534 24.719 21.9467 25.1323 21.52L30.1856 16.4667C30.4523 16.2134 30.4523 15.7867 30.199 15.5334ZM13.9988 20H17.9988C18.3722 20 18.6655 20.2934 18.6655 20.6667V24H21.0655C21.6522 24 21.9455 24.72 21.5322 25.1334L16.4788 30.1867C16.2122 30.4534 15.7988 30.4534 15.5322 30.1867L10.4788 25.1334C10.0522 24.72 10.3455 24 10.9455 24H13.3322V20.6667C13.3322 20.2934 13.6255 20 13.9988 20Z"
                        fill="white"
                        _ngcontent-dxq-c93=""
                      ></path>
                    </svg>
                  )}
                  {k == "Pencil" && (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      _ngcontent-dxq-c93=""
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M28.1331 7.58573C28.6645 8.1172 28.6645 8.97574 28.1331 9.50722L25.6392 12.0011L20.5289 6.89072L23.0227 4.39688C23.2773 4.1417 23.623 3.99829 23.9835 3.99829C24.3439 3.99829 24.6896 4.1417 24.9442 4.39688L28.1331 7.58573ZM3.99829 27.8501V23.7074C3.99829 23.5166 4.06643 23.353 4.2027 23.2168L19.0704 8.34909L24.1807 13.4594L9.29942 28.3271C9.17677 28.4634 8.99961 28.5315 8.82245 28.5315H4.67967C4.2981 28.5315 3.99829 28.2317 3.99829 27.8501Z"
                        fill="white"
                        _ngcontent-dxq-c93=""
                      ></path>
                    </svg>
                  )}
                  {k == "Rectangle" && <CheckBoxOutlineBlankIcon />}
                  {k == "Select" && <SelectAllIcon />}
                  {k == "grid" && (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      _ngcontent-yam-c93=""
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.6785 8.94394L20.5613 3.07178C21.1011 2.53166 21.987 2.53166 22.5268 3.07178L28.3957 8.94394C28.9355 9.48407 28.9355 10.3566 28.3957 10.8967L22.513 16.7827C22.2503 17.0455 21.909 17.1805 21.5656 17.1875H21.5087C21.1652 17.1805 20.8239 17.0455 20.5613 16.7827L14.6785 10.8967C14.1387 10.3566 14.1387 9.48407 14.6785 8.94394ZM21.5087 17.1875H17.7911C17.0298 17.1875 16.407 17.8107 16.407 18.5725V26.8821C16.407 27.6438 17.0298 28.2671 17.7911 28.2671H26.0962C26.8575 28.2671 27.4804 27.6438 27.4804 26.8821V18.5725C27.4804 17.8107 26.8575 17.1875 26.0962 17.1875H21.5656C21.5466 17.1879 21.5276 17.1879 21.5087 17.1875ZM3.2002 5.28765V13.5973C3.2002 14.359 3.82308 14.9822 4.58437 14.9822H12.8894C13.6507 14.9822 14.2736 14.359 14.2736 13.5973V5.28765C14.2736 4.52593 13.6507 3.9027 12.8894 3.9027H4.58437C3.82308 3.9027 3.2002 4.52593 3.2002 5.28765ZM12.8894 28.2669H4.58437C3.82308 28.2669 3.2002 27.6437 3.2002 26.882V18.5723C3.2002 17.8106 3.82308 17.1874 4.58437 17.1874H12.8894C13.6507 17.1874 14.2736 17.8106 14.2736 18.5723V26.882C14.2736 27.6437 13.6507 28.2669 12.8894 28.2669Z"
                        fill="white"
                        _ngcontent-yam-c93=""
                      ></path>
                    </svg>
                  )}
                  {k == "user_done" && (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      _ngcontent-yam-c93=""
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.3197 16.3198C17.1706 16.3198 19.4796 14.0107 19.4796 11.1599C19.4796 8.30906 17.1706 6 14.3197 6C11.4689 6 9.15982 8.30906 9.15982 11.1599C9.15982 14.0107 11.4689 16.3198 14.3197 16.3198ZM15.6098 26.6397L14.5004 25.5303C12.9782 24.0081 12.9911 21.5313 14.5262 20.035L15.6098 18.9772C15.1067 18.9256 14.7326 18.8998 14.3198 18.8998C10.8756 18.8998 4 20.6284 4 24.0597V26.6397H15.6098ZM16.4999 23.6598L19.1702 26.3559C19.6732 26.859 20.4988 26.859 21.0019 26.3559L27.6324 19.6738C28.1226 19.1836 28.1226 18.3838 27.6324 17.8807L27.6195 17.8678C27.1164 17.3647 26.3037 17.3647 25.8006 17.8678L20.086 23.6211L18.3188 21.8538C17.8286 21.3508 17.0159 21.3508 16.5128 21.8538L16.4999 21.8667C16.0097 22.3569 16.0097 23.1567 16.4999 23.6598Z"
                        fill="white"
                        _ngcontent-yam-c93=""
                      ></path>
                    </svg>
                  )}
                  {k == "erase" && (
                    <svg
                      width="32"
                      onClick={() => setClearCommand(true)}
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      _ngcontent-dxq-c93=""
                    >
                      <path
                        d="M21.6535 4.78L28.2535 11.3667C29.2935 12.42 29.2935 14.1 28.2535 15.1533L16.0001 27.4067C13.9201 29.4867 10.5468 29.4867 8.45346 27.4067L3.7468 22.7C2.7068 21.6467 2.7068 19.9667 3.7468 18.9133L17.8801 4.78C18.9335 3.74 20.6135 3.74 21.6535 4.78ZM5.6268 20.8067L10.3468 25.5133C11.3868 26.5667 13.0668 26.5667 14.1201 25.5133L18.8268 20.8067L12.2268 14.2067L5.6268 20.8067Z"
                        fill="white"
                        _ngcontent-dxq-c93=""
                      ></path>
                    </svg>
                  )}
                  {k == "message" && (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      _ngcontent-yam-c93=""
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.7602 4.26666H26.2402C27.6482 4.26666 28.8002 5.41866 28.8002 6.82666V29.8667L23.6802 24.7467H5.7602C4.3522 24.7467 3.2002 23.5947 3.2002 22.1867V6.82666C3.2002 5.41866 4.3522 4.26666 5.7602 4.26666ZM9.60019 19.6267H22.4002C23.1042 19.6267 23.6802 19.0507 23.6802 18.3467C23.6802 17.6427 23.1042 17.0667 22.4002 17.0667H9.60019C8.89619 17.0667 8.32019 17.6427 8.32019 18.3467C8.32019 19.0507 8.89619 19.6267 9.60019 19.6267ZM22.4002 15.7867H9.60019C8.89619 15.7867 8.32019 15.2107 8.32019 14.5067C8.32019 13.8027 8.89619 13.2267 9.60019 13.2267H22.4002C23.1042 13.2267 23.6802 13.8027 23.6802 14.5067C23.6802 15.2107 23.1042 15.7867 22.4002 15.7867ZM9.60019 11.9467H22.4002C23.1042 11.9467 23.6802 11.3707 23.6802 10.6667C23.6802 9.96266 23.1042 9.38666 22.4002 9.38666H9.60019C8.89619 9.38666 8.32019 9.96266 8.32019 10.6667C8.32019 11.3707 8.89619 11.9467 9.60019 11.9467Z"
                        fill="white"
                        _ngcontent-yam-c93=""
                      ></path>
                    </svg>
                  )}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Whiteboard;
