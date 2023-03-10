import React, { useEffect, useState } from "react";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import "../../assets/css/BookLesson.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import { CardWorking } from "../../assets/script/js/Events/Booklesson/HandleCard";
import { Calender } from "../../assets/script/js/Events/Booklesson/DashboardCalender";
import { Link, useParams } from "react-router-dom";
import BookLessonForm from "../components/BookLesson/BookLessonForm";
import CloseIcon from "@material-ui/icons/Close";
import { AxiosInstance } from "../../assets/script/js/axios/BaseAxios";
function BookLesson() {
  let { id } = useParams();
  const [BookedLesson, setBookedLesson] = useState([]);
  const [ParentChilds, setParentChild] = useState([]);

  const FetchLessons = async (e) => {
    await AxiosInstance.get(`lesson/findByQuery`, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("Auth")}`,
      },
    })
      .then((res) => {
        let FetchLessons = [];
        // FetchLessons=res.data.filter(EachObj=>EachObj['parent']==id)

        setBookedLesson(res.data);

        res["data"].length >= 1 && CardWorking();

        // if lessons available then call event function
        // FetchLessons.length>=1&&CardWorking()
      })
      .catch((err) => {
        console.log(err);
      });

    await AxiosInstance.get(`/parent/child/6087f44c2498343b9c855faf`)
      .then((res) => {
        setParentChild(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const HandleChildSelection = async (e) => {
    let InformationObj = {};
    let ChildValue = e.target.value;
    let SelectIdSplited = e.target.id.split("-");
    let BookedLessonId = SelectIdSplited[0];

    await AxiosInstance.get(`/booked/lesson/show/${BookedLessonId}`)
      .then((res) => {
        InformationObj = {
          teacher: res.data["teacher"],
          subject: res.data["subject"],
          status: true,
          parent: res.data["parent"],
          child: ChildValue,
          student: "",
        };
      })
      .catch((err) => {
        console.log(err);
      });

    await AxiosInstance.put(
      `/booked/lesson/add/${BookedLessonId}`,
      InformationObj,
      {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem("Auth")}`,
        },
      }
    )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        FetchLessons();
        FetchLessons.length >= 1 && CardWorking();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    Calender();

    FetchLessons();
  }, []);
  return (
    <div className="BookLesson">
      <Header />
      <div className="book-lesson-body">
        <div className="book-lesson-box-container">
          <CloseIcon
            className="close-icon-book-lesson"
            onClick={(e) => {
              document.querySelector(
                ".book-lesson-box-container"
              ).style.display = "none";
            }}
          />
          <div className="lesson-start-component">
            <h1>START THE MEETING</h1>
            <div className="lesson-start-button">
              <button>Start Meeting</button>
              <button
                onClick={(e) => {
                  document.querySelector(
                    ".lesson-start-component"
                  ).style.display = "none";
                  document.querySelector(
                    ".book-lesson-form-container"
                  ).style.display = "block";
                }}
              >
                Schedule meeting
              </button>
            </div>
          </div>
          <div
            className="book-lesson-form-container"
            style={{ display: "none" }}
          >
            <BookLessonForm />
          </div>
        </div>
        <div className="left-side">
          <div className="top">
            <nav>
              <li className="active">Upcoming</li>
              <li>Ongoing</li>
              <li>Finished</li>
            </nav>
            <form>
              <div className="search-input">
                <SearchIcon />
                <input type="text" placeholder="Search for a meeting" />
              </div>
            </form>
          </div>

          <div className="bottom">
            <div className="meeting-box">
              <h1>Month May</h1>
              <div className="meeting-card-wrapper">
                {/* <p>13 <span className="month">MAY</span> <span className="day">Thursday</span></p> */}
                {BookedLesson.map((EachBookedLesson) => (
                  <div className="metting-card" key={EachBookedLesson._id}>
                    <div
                      className="meeting-card-head"
                      id={EachBookedLesson._id + "-meeting-head"}
                    >
                      <div
                        className="metting-card-dropdown-icon"
                        id={"meeting-icon-" + EachBookedLesson._id}
                      >
                        <ArrowDropDownIcon style={{ pointerEvents: "none" }} />
                      </div>
                      <p
                        className="time"
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        duration :{" "}
                        <span style={{ fontWeight: 500 }}>
                          {EachBookedLesson.duration}
                        </span>
                      </p>
                      <p
                        className="description"
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        Starting Time :{" "}
                        <span style={{ fontWeight: 500 }}>
                          {EachBookedLesson.startTime}
                        </span>
                      </p>
                      <IconButton>
                        <EditIcon style={{ color: "#000" }} />
                      </IconButton>
                      <IconButton>
                        <DeleteIcon style={{ color: "#000" }} />
                      </IconButton>
                      {/* <select onChange={HandleChildSelection} id={`${EachBookedLesson['_id']}-select`}>
                                        <option>Select Child</option>
                                        {ParentChilds.map((ParentChild,index)=>(
                                            <option value={ParentChild['_id']}>{index+1}</option>
                                        ))}
                                    </select> */}
                    </div>
                    <div
                      className="meeting-content"
                      id={"meeting-" + EachBookedLesson._id}
                    >
                      <div className="button-wrapper">
                        <Link to={`/lesson/${EachBookedLesson._id}`}>
                          Join Meeting
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          {/* start meeting  */}
          <button
            className="new-meeting-button"
            onClick={(e) => {
              document.querySelector(
                ".book-lesson-box-container"
              ).style.display = "block";
              document.querySelector(
                ".book-lesson-form-container"
              ).style.display = "none";
              document.querySelector(".lesson-start-component").style.display =
                "block";
            }}
          >
            New Meeting
          </button>
          <div class="box calender stagger">
            <div class="calender-top">
              <div class="icon-wrapper" id="calender-back-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9.818"
                  height="15.393"
                  viewBox="0 0 9.818 15.393"
                >
                  <path
                    id="Path_41"
                    data-name="Path 41"
                    d="M6.636,0,0,6.636l6.636,6.636"
                    transform="translate(2.121 1.061)"
                    fill="none"
                    stroke="#040f0f"
                    stroke-width="3"
                  />
                </svg>
              </div>
              <strong class="Calender-DateTime">Dec, 2021</strong>
              <div class="icon-wrapper" id="calender-towards-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9.818"
                  height="15.393"
                  viewBox="0 0 9.818 15.393"
                >
                  <path
                    id="Path_67"
                    data-name="Path 67"
                    d="M0,0,6.636,6.636,0,13.272"
                    transform="translate(1.061 1.061)"
                    fill="none"
                    stroke="#040f0f"
                    stroke-width="3"
                  />
                </svg>
              </div>
            </div>
            <div class="calender-days-name">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
            <div class="calender-days"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookLesson;
