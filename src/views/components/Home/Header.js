import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Aside from "./Aside";
function Header() {
  const [AuthToken, setAuthToken] = useState(null);
  useEffect(() => {
    let AuthTokenLocal = window.sessionStorage.getItem("Auth");

    if (AuthTokenLocal === null) {
      setAuthToken(null);
    } else {
      setAuthToken(AuthTokenLocal);
    }
  }, []);
  return (
    <div className="Header">
      <Aside AuthToken={AuthToken} />
      <Link to="/">
        <div className="logo">
          <p>MyTutor</p>
        </div>
      </Link>

      <nav>
        <Link to="/tutors">
          <li>Find a tutor</li>
        </Link>

        <li>How it works</li>
        <li>Prices</li>

        <li>For schools</li>
        <li>Become a tutor</li>
      </nav>

      <div className="auth-buttons">
        <Link to="/register">
          <button className="signin-button">Sign up</button>
        </Link>
        {(window.sessionStorage.getItem("Auth") === null ||
          window.sessionStorage.getItem("Auth") === "null") && (
          <Link to="/login">
            <button className="login-button">log in</button>
          </Link>
        )}

        {/* {(window.sessionStorage.getItem("Auth") !== null ||
          window.sessionStorage.getItem("Auth") !== "null") && (
          <button
            className="logout-button"
            onClick={(e) => {
              window.sessionStorage.setItem("Auth", null);
              console.log(window.sessionStorage.getItem("Auth"));
              setAuthToken(null);
            }}>
            Logout
          </button>
        )} */}
      </div>

      <MenuIcon
        className="burger-menu"
        onClick={(e) => {
          document.querySelector(".aside").classList.toggle("toggle");
        }}
      />
    </div>
  );
}

export default Header;
