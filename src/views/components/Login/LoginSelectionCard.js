import React from "react";
import { Link } from "react-router-dom";
import parentlogin from "../../../assets/img/parent-login.png";

function LoginSelectionCard({
  img,
  mainPara,
  mainParaDesc,
  buttonTitle,
  loginLink,
}) {
  return (
    // <Link>
    <div className="LoginSelectionCard">
      <div className="img-wrapper">
        <img src={img} />
      </div>
      <p className="card-main-para">{mainPara}</p>
      <p className="card-main-para-desc">{mainParaDesc}</p>
      <Link to={`/login/${loginLink}`}>
        <button>{buttonTitle}</button>
      </Link>
    </div>
    // </Link>
  );
}

export default LoginSelectionCard;
