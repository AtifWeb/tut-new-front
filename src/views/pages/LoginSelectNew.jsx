import React from "react";
import Logo from "../../assets/img/logo.svg";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import "../../assets/css/register.css";
function LoginSelectNew() {
  return (
    <div className="RegisterSelect">
      {/* <img src={Logo} alt="logo" /> */}
      <a className="wordmark logo-full" href="https://gumroad.com/"></a>
      <div className="register-selection-box">
        <div className="top">
          <Link to="/" class="register-back-icon">
            <ArrowBackIcon />
          </Link>
          <h4>Sign in</h4>
          <Link to="/register" className="register-login-button">
            Sign up
          </Link>
        </div>

        <Link to="/LoginNew/parent">
          <div className="choice-box">
            <p>I'm a parent</p>
          </div>
        </Link>
        <Link to="/LoginNew/student">
          <div className="choice-box">
            <p>I'm a student</p>
          </div>
        </Link>
        <Link to="/LoginNew/tutor">
          <div className="choice-box">
            <p>I'm a tutor</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LoginSelectNew;
