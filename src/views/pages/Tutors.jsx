import React, { useEffect, useState } from "react";
import Header from "../components/New/Header";

import BecomeTutor from "../../assets/img/student-laptop-tutor.svg";
import "../../assets/css/tutors.css";
import { AxiosInstance } from "../../assets/script/js/axios/BaseAxios";
import { Footer } from "../components/New/Footer";
import { ShareWork } from "../components/New/ShareWork";
function Tutors() {
  const [data, setData] = useState([]);
  useEffect(() => {
    AxiosInstance.get("teacher/find")
      .then((res) => {
        console.log(res.data);

        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Tutors">
      <Header />

      <div class="page-wrap">
        <div
          data-w-id="4bae5684-8429-67b2-8e14-e1ef2d960142"
          class="section bg-yellow-dark wf-section"
        >
          <div class="container">
            <div class="section-intro hero">
              <p class="section-tagline">Find Tutors</p>
              <h1>Tutors that fit your schedule</h1>
              <p class="text-md">
                Find your perfect subject tutor and arrange a Free Video
                Meeting. Then book one-to-one Online Lessons to fit your
                schedule.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="tutors-body">
        <div className="tutors">
          {/* {data.map((EachData) => (
            <TutorCard
              id={EachData._id}
              description={EachData.description}
              fname={EachData.firstName}
              lname={EachData.lastName}
              price={EachData.price}
              university={EachData.educationFrom}
              subjects={EachData.subjects}
            />
          ))} */}
          {/* discription={EachData.discription} name={EachData.name} university={EachData.educationFrom} price={EachData.price} */}
          {/* subjects={EachData.subjects} */}
        </div>
      </div>

      <ShareWork />
      <Footer />
    </div>
  );
}

export default Tutors;
