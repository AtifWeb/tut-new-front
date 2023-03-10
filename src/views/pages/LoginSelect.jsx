import React from "react";
import "../../assets/css/login-select.css";
import LoginSelectionCard from "../components/Login/LoginSelectionCard";
import studentlogin from "../../assets/img/student-login.png";
import parentlogin from "../../assets/img/parent-login.png";
import tutorlogin from "../../assets/img/tutor-login.png";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
function LoginSelect() {
  return (
    <div className="LoginSelect">
      <div className="login-selection-section">
        <div className="login-selection-section-top">
          <h1>Log in</h1>
          <Link to="/" className="close-login-selection-icon">
            <CloseIcon />
          </Link>
        </div>

        <div className="login-selection-cards">
          <LoginSelectionCard
            img={parentlogin}
            mainPara="I am a Parent"
            mainParaDesc="Manage payments or lessons for your child"
            buttonTitle="PARENT LOG IN"
            loginLink="ParentAuth/parent"
          />
          <LoginSelectionCard
            img={studentlogin}
            mainPara="I am a Student"
            mainParaDesc="Have lessons, message your tutor or watch your lessons back"
            buttonTitle="STUDENT LOG IN"
            loginLink="StudentAuth/student"
          />
          <LoginSelectionCard
            img={tutorlogin}
            mainPara="I am a Tutor"
            mainParaDesc="Give lessons or manage bookings with your customers"
            buttonTitle="TUTOR LOG IN"
            loginLink="TutorAuth/teacher"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginSelect;
