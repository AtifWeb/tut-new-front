import React from "react";
import Logo from "../../assets/img/logo.svg";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import "../../assets/css/register.css";
function RegisterSelect() {
  return (
    <div className="RegisterSelect">
      {/* <img src={Logo} alt="logo" /> */}
      <a className="wordmark logo-full" href="https://gumroad.com/"></a>
      <div className="register-selection-box">
        <div className="top">
          <Link to="/" class="register-back-icon">
            <ArrowBackIcon />
          </Link>
          <h4>Sign up</h4>
          <Link to="/LoginSelectNew" className="register-login-button">
            Log in
          </Link>
        </div>

        <Link to="/RegisterNew/parent">
          <div className="choice-box">
            <p>I'm a parent</p>
          </div>
        </Link>
        <Link to="/RegisterNew/student">
          <div className="choice-box">
            <p>I'm a student</p>
          </div>
        </Link>
        <Link to="/RegisterNew/auth/tutor">
          <div className="choice-box">
            <p>I'm a tutor</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default RegisterSelect;
