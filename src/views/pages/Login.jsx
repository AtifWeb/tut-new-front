import React, { useState } from "react";
import "../../assets/css/login-select.css";
import "../../assets/css/login.css";
import CloseIcon from "@material-ui/icons/Close";
import { AxiosInstance } from "../../assets/script/js/axios/BaseAxios";
import { Link, useParams, useHistory } from "react-router-dom";

function Login({ img, title, desc, mainheading }) {
  const { type } = useParams();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [AuthToken, setAuthToken] = useState("");
  const [Error, setError] = useState(null);
  const History = useHistory();

  const HandleLogin = async (e) => {
    e.preventDefault();
    let UserData = {
      email: Email,
      password: Password,
    };
    await AxiosInstance.post(`/${type}/login`, UserData)
      .then((res) => {
        if (res.data["details"]) {
          setError(res.data["details"][0].message);
        } else if (res.data["error"]) {
          setError(res.data["error"]);
        } else {
          setError(null);
          console.log(res.data);
          setAuthToken(res.data["token"]);
          window.sessionStorage.setItem("Auth", res.data["token"]);
          window.sessionStorage.setItem("parent_id", res.data["parent_id"]);
          History.push("/");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="LoginSelect Login">
      <div className="login-selection-section">
        <div className="login-selection-section-top">
          <h1>{mainheading}</h1>
          <Link to="/login" className="close-login-selection-icon">
            <CloseIcon />
          </Link>
        </div>

        <div className="login-form">
          <div className="login-form-left-side">
            <img src={img} />
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>

          <form className="login-form-pure">
            <div className="input-wrapper">
              <label htmlFor="login-email-pure">Email Address</label>
              <input
                type="email"
                id="login-email-pure"
                placeholder="Type your email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-wrapper password-input-wrapper">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                placeholder="Type your email address"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <input
              type="submit"
              value="Login"
              className="login-submit-button"
              onClick={HandleLogin}
            />
            {Error != null && (
              <div className="error-message">
                <p>{Error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
