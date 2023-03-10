import React from "react";
import HandPickedTutor from "../../../assets/img/handpicked-tutors.png";
function HandPicked() {
  return (
    <div className="HandPicked">
      <div className="HandPicked-content">
        <div className="HandPicked-image-wrapper">
          <img src={HandPickedTutor} />
        </div>
        <div className="HandPicked-presentation">
          <h1>
            <span>Handpicked tutors,</span> wherever you live
          </h1>
          <p>
            Choose from over 30 subjects to keep your child learning from home.
            They can learn fun new topics, revise old ones, and be guided
            through by friendly subject experts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HandPicked;
