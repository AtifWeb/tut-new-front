import React from "react";
import BecomeTutor from "../../../assets/img/onlinetutor.png";
function StartingPrice() {
  return (
    <div className="StartingPrice">
      <div className="starting-price-content">
        <div className="starting-price-presentation">
          <h1>
            Lessons from <br />
            <span>£20/hour</span>
          </h1>
          <p>
            Choose from over 30 subjects to keep your child learning from home.
            They can learn fun new topics, revise old ones, and be guided
            through by friendly subject experts.
          </p>
        </div>

        <div className="starting-price-image-wrapper">
          <img src={BecomeTutor} />
        </div>
      </div>
    </div>
  );
}

export default StartingPrice;
