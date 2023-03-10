import React from "react";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import "../../assets/css/Home.css";
import "../../assets/css/Footer.css";
import StartingPrice from "../components/Home/StartingPrice";
import HandPicked from "../components/Home/HandPicked";
import TrustedTeachers from "../components/Home/TrustedTeachers";
import OnlineLessons from "../components/Home/OnlineLessons";
import CustomButton from "../components/Home/CustomButton";
import Footer from "../components/Home/Footer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <StartingPrice />
      <HandPicked />
      <TrustedTeachers />
      <OnlineLessons />
      <div className="button-wrapper">
        <CustomButton title="find a tutor" />
      </div>

      <div className="study-resources">
        <div className="study-resources-presentation">
          <img src="https://cdn.mytutor.co.uk/images/uploads/comment.svg" />
          <h1>Free study resources</h1>
          <p>
            Over a million students use our free resources to help them with
            their homework.
          </p>
        </div>
        <div className="study-resources-button">
          <button>EXPLORE RESOURCES</button>
        </div>
      </div>

      <div className="reviews">
        <h1>Thousands of parents, students and teachers have rated us 4.9/5</h1>
        <div className="cards">
          <div className="card">
            <div className="card-top">
              <div className="card-top-content">
                <img src="https://cdn.mytutor.co.uk/images/uploads/reviewcard-Sharleen.jpg" />
                <div className="review-presentation">
                  <p className="reviews-name">Sharleen</p>
                  <p className="reviews-lesson">4 Biology GCSE lessons</p>
                </div>
              </div>
            </div>
            <div className="card-bottom">
              <p>
                "It is SO positive to have a mentor in the same peer group and
                really understanding what it's like to be a student now . Our
                tutor has really helped with both exam technique and confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="meeting-tutor">
        <div className="meeting-tutor-presentation">
          <h1>
            Book a free meeting with a tutor today and find out how they can
            help your child
          </h1>
        </div>
        <div className="meeting-tutor-button">
          <button>FIND A TUTOR</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
