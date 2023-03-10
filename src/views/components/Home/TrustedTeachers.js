import React from "react";
import trustedbyteachers from "../../../assets/img/trustedbyteachers.png";
function TrustedTeachers() {
  return (
    <div className="TrustedTeachers">
      <div className="TrustedTeachers-content">
        <div className="TrustedTeachers-presentation">
          <h1>We’re trusted by teachers</h1>
          <p>
            Because our lessons get such good results, schools use them to
            support their teaching. We work with 500+ across the UK, targeting
            learning gaps and helping pupils of all abilities reach their goals.
          </p>
        </div>
        <div className="TrustedTeachers-image-wrapper">
          <img src={trustedbyteachers} />
        </div>
      </div>
    </div>
  );
}

export default TrustedTeachers;
