import React from "react";
import OnlineLesson from "../../../assets/img/our-lessonspace.png";
function OnlineLessons() {
  return (
    <div className="OnlineLessons">
      <div className="OnlineLessons-content">
        <div className="OnlineLessons-image-wrapper">
          <img src={OnlineLesson} />
        </div>
        <div className="OnlineLessons-presentation">
          <h1>We’re trusted by teachers</h1>
          <p>
            Because our lessons get such good results, schools use them to
            support their teaching. We work with 500+ across the UK, targeting
            learning gaps and helping pupils of all abilities reach their goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OnlineLessons;
