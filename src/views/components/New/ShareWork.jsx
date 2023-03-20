import React from "react";
import { Link } from "react-router-dom";

export const ShareWork = () => {
  return (
    <div className="section bg-pink wf-section">
      <div className="container">
        <div className="section-intro cta">
          <h2 className="section-title">
            Share your work.
            <span className="line-break">Someone out there needs it.</span>
          </h2>
          <Link to="/register" className="shadow-button-wrap w-inline-block">
            <div className="shadow-button-text">Register</div>
            <div className="shadow-button-shadow _2 red"></div>
            <div className="shadow-button-shadow yellow"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};
