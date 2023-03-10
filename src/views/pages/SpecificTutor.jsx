import React, { useEffect, useState } from "react";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";

import { Link, useParams, useHistory } from "react-router-dom";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { HandleSpecificTutorEvent } from "../../assets/script/js/Events/SpecificTutor/SpecificTutor";
import { AxiosInstance } from "../../assets/script/js/axios/BaseAxios";
import axios from "axios";
function SpecificTutor() {
  const [data, setData] = useState({});

  const [subject, setSubject] = useState("");
  const History = useHistory();
  const [subjects, getSubjects] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    AxiosInstance.get(`teacher/find/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);

        getSubjects(res.data["subjects"]);

        console.log(res.data["subjects"]);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();
    let File = document.querySelector("#Files-input").files[0];
    let formdata = new FormData();

    formdata.append("name", "Amir Butt");
    formdata.append("lesson", "613e3b803676cf001665dc4c");

    formdata.append("doc", File);

    axios
      .post(
        `https://tutorial-server33.herokuapp.com/api/lesson/doc/create`,
        formdata,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTc2MjI4YjFkYjMwMDAxNmY5MjA2MSIsInVzZXJUeXBlIjoiVGVhY2hlciIsImlhdCI6MTYzNjEwODk3OCwiZXhwIjoxNjM2MTk1Mzc4fQ.zKisq5VwbfE3x-bcmVwkr6i7NjqRuvnXuBerSDOIa1k`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // const HandleSubmit = (e) => {
  //   e.preventDefault();
  //   let File=document.querySelector("#Files-input").files[0]
  //   let formdata = new FormData();
  //   let subjects = [{ subject: "Arabic" }, { subject: "English" }];

  //   formdata.append("name", "Amir Butt");
  //   formdata.append("description", "My name is Amir Butt");
  //   formdata.append("educationFrom", "University of Lahore");
  //   formdata.append("status", "active");
  //   formdata.append("sessionDescription", "nothing just trying");
  //   formdata.append("price", "20");
  //   formdata.append("image", File);

  //   for (let i = 0; i < subjects.length; i++) {
  //     formdata.append("subjects", subjects[i].subject);
  //   }

  //   AxiosInstance.post(`/teacher/create`, formdata)
  //     .then((res) => {

  //       console.log(res);
  //       setData(res.data);

  //     })
  //     .catch((err) => console.log(err));

  // };
  useEffect(() => {
    HandleSpecificTutorEvent();
  }, []);

  const HandleBookedLesson = (e) => {
    e.preventDefault();
    let InformationObject = {
      startTime: "2999-10-11T00:00:00.000Z",
      duration: 3600,
      subject: "61176228b1db300016f92060",
      student: "613872aa5f3ca80016514a2d",
      teacher: "61176228b1db300016f92061",
      parents: ["613873ce5f3ca80016514a2e"],
    };
    console.log(InformationObject);

    // student:window.sessionStorage.getItem("student_id")

    AxiosInstance.post(`lesson/create`, InformationObject, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("Auth")}`,
      },
    })
      .then((res) => {
        if (res.data["name"] == "JsonWebTokenError") {
          History.push("/login/ParentAuth/parent");
        } else if (res.data["error"]) {
          console.log(res.data["error"]["_message"]);
        } else if (InformationObject["subject"] == "null") {
          console.log("Subject Should not Null");
        } else {
          History.push(`/BookLesson/${InformationObject.parents[0]}`);
        }
      })
      .catch((err) => {
        console.log(err.message);
        History.push("/login/ParentAuth/parent");
      });
  };
  return (
    <div className="SpecificTutor">
      <Header />
      {/* <form action="" encType="multipart/form-data" onSubmit={HandleSubmit}>
        <input type="file" name="" id="Files-input" />
        <input type="submit" name="" />
      </form> */}

      <form action="" encType="multipart/form-data" onSubmit={HandleSubmit}>
        <input type="file" name="" id="Files-input" />
        <input type="submit" name="" />
      </form>

      <div className="specific-tutor-body">
        <Link to="/tutors">View Tutors </Link>
        <div className="tutor-profile">
          <div className="tutor-presentation">
            <div className="tutor-presentation-top">
              <img
                src="https://cdn.mytutor.co.uk/images/tutor-profiles/1572914.180_1-1_8.jpg?v=0"
                alt=""
              />
              <div className="tutor-top-presentation-content">
                <div className="top">
                  <div className="top-left">
                    <h2 className="name">
                      {data.firstName} {data.lastName}
                    </h2>
                    <p className="university">{data.educationFrom}</p>
                  </div>
                  <div className="top-right">
                    <p>£{data.price} /hr</p>
                  </div>
                </div>
                <div className="reviews-tutor">
                  <h4>Reviews</h4>
                  <p>3 Reviews</p>
                </div>

                {/* <div className="completed-lessons">
                  <span>87</span>
                  <p>completed lessons</p>
                </div> */}
              </div>
            </div>

            <div className="about-tutor">
              <h1 className="about-me-heading">About me</h1>
              <p>
                {data.description}

                {/* I've a very friendly and approachable aspiring teacher who
                currently holds an offer to teach secondary Maths on the Teach
                First Training Programme. I am an experienced Maths and English
                tutor and have tutored pupils of varying ages (6-16) and with
                varying abilities.I recognise how challenging subjects like
                Maths and English can be, but I truly believe that with enough
                practice, patience, and the right guidance, anyone can achieve
                top grades. I pride myself on delivering concise, effective, and
                interactive lessons; I tailor my lessons to the preferred
                learning style of the student in question as I recognise that
                everyone responds differently and at different rates. I'm more
                than happy to offer stand-alone lessons, a couple of lessons,
                clusters, etc. depending on your needs and requirement. If
                you're interested or have any questions, please don't hesitate
                to get into contact with me! */}
              </p>
              <h1 className="about-my-session-heading">About my sessions</h1>
              <p>
                {data.sessionDescription}

                {/* My aim to help my students develop their confidence in the
                subject in which they are being tutored. I do take a
                results-focused approach and therefore take some time in each
                lesson to focus on exam technique as I strongly believe that
                repetition and practice will build confidence and lead to
                perceptible progress. However, given the current pandemic, I do
                prioritise covering missed content, and ultimately the content
                and direction of the lesson is determined by your needs. During
                the first lesson, I like to establish the student's strengths,
                and areas of improvement. The structure of my lessons tends to
                follow a starter, main, and plenary format. In the starter, I
                will introduce the topic or re-cap the contents of the previous
                lesson. During the main segment of the lesson, we will explore
                the topic in more depth and work on a set of practice questions.
                Finally, the plenary activity tends to be an exam-style question
                as to allow the student to familiarise themselves with the exam
                and exam expectations. I also provide regular feedback to both
                students and parents. */}
              </p>
            </div>

            <div className="rating_reviews">
              <h1>Ratings & reviews</h1>

              <div className="review-wrapper">
                <div className="review">
                  <span className="review-short-name">EB</span>
                  <div className="review-presentation">
                    <p className="review-long-name">Irina</p>
                    <p className="review-pure">
                      Moriyom, you helped me so much to learn how to
                      transform/rearrange formulas! You explained everything so
                      clearly and you are so kind, supportive, and helpful!
                      -Sharona
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tutor-contact-wrapper">
            <div className="tutor-contact">
              <h1>Send Moriyom a message</h1>
              <form>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  defaultValue={`Hi, I’m looking for a tutor. Are you available for a free meeting? I’d like to find out more about how you work. I’m looking forward to your reply!`}
                ></textarea>

                <select
                  className="select-wrapper"
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="null">Subjects</option>
                  {subjects.map((subject) => (
                    <option value={subject}>{subject}</option>
                  ))}
                </select>

                <div></div>

                <input
                  type="submit"
                  className="submit-button"
                  value="BOOK LESSON"
                  onClick={HandleBookedLesson}
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SpecificTutor;
