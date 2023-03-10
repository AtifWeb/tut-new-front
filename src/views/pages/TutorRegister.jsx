import React, { useState } from "react";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { AxiosInstance } from "../../assets/script/js/axios/BaseAxios";
import { HandleMessages } from "../../assets/script/js/Events/Auth/Register/Register";
import { useParams } from "react-router-dom";
function CommonRegister() {
  const { type } = useParams();

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [university, setuniversity] = useState("");
  const [universityEmail, setuniversityEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const [sessionDescription, setsessionDescription] = useState("");
  const [description, setdescription] = useState("");
  const [educationFrom, seteducationFrom] = useState("");
  const [price, setprice] = useState("");
  const [status, setstatus] = useState("");

  const [error, setError] = useState("");
  const [Image, setImage] = useState("");

  const HandleRegistration = (e) => {
    HandleMessages(".SuccessMessage", ".ErrorMessage", "none", "none");

    e.preventDefault();
    let UserData = {
      email: Email,
      lastName: LastName,
      sessionDescription: sessionDescription,
      price: parseInt(price),
      university_email: universityEmail,
      phone: PhoneNumber,
      university: university,
      educationFrom: educationFrom,
      status: status,
      firstName: FirstName,
      password: Password,
      description: description,
    };

    console.log(UserData);

    let formdata = new FormData();
    formdata.append("email", UserData["email"]);
    formdata.append("lastName", UserData["lastName"]);
    formdata.append("sessionDescription", UserData["sessionDescription"]);
    formdata.append("price", UserData["price"]);
    formdata.append("university_email", UserData["university_email"]);
    formdata.append("phone", UserData["phone"]);
    formdata.append("university", UserData["university"]);
    formdata.append("educationFrom", UserData["educationFrom"]);
    formdata.append("status", UserData["status"]);
    formdata.append("firstName", UserData["firstName"]);
    formdata.append("password", UserData["password"]);
    formdata.append("description", UserData["description"]);

    var arr = ["Maths", "English", "Urdu", "Science"];
    for (var i = 0; i < arr.length; i++) {
      formdata.append("subjects", arr[i]);
    }

    AxiosInstance.post(`teacher/register`, formdata)
      .then((res) => {
        console.log(res);
        if (res.data["details"]) {
          setError(res.data["details"][0].message);
        } else {
          HandleMessages(".SuccessMessage", ".ErrorMessage", "block", "none");
        }
      })
      .catch((err) => {
        console.log(err.message);

        setError(err.message);

        HandleMessages(".SuccessMessage", ".ErrorMessage", "none", "block");
      });
  };
  return (
    <div className="CommonRegister">
      <img src={Logo} alt="logo" />
      <div className="register-form-common">
        <div className="top">
          <Link to="/" class="register-back-icon">
            <ArrowBackIcon />
          </Link>
          <h4>Sign up</h4>
          <Link to="/login" className="register-login-button">
            Log in
          </Link>
        </div>
        <form
          className="common-registration-form"
          enctype="multipart/form-data"
        >
          <div className="input-wrapper">
            <label>first name</label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label>last name</label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label>EMAIL ADDRESS</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="input-wrapper">
            <label>Session Description</label>
            <input
              type="text"
              onChange={(e) => setsessionDescription(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label>Price</label>
            <input type="number" onChange={(e) => setprice(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label>educationFrom</label>
            <input
              type="text"
              onChange={(e) => seteducationFrom(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label>Status</label>
            <input type="text" onChange={(e) => setstatus(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label>Description</label>
            <input
              type="text"
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label>university</label>
            <input
              type="text"
              onChange={(e) => setuniversity(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label>University Email</label>
            <input
              type="text"
              onChange={(e) => setuniversityEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label>CREATE A PASSWORD</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label>PHONE NUMBER</label>
            <input
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <input
            type="file"
            name=""
            id=""
            onChange={(e) => setImage(e.target.files[0])}
          />
          <input type="submit" value="sign up" onClick={HandleRegistration} />

          <div className="SuccessMessage" style={{ display: "none" }}>
            <p>
              Wow! {FirstName} {LastName} you have registered
            </p>
          </div>

          <div className="ErrorMessage" style={{ display: "none" }}>
            <p>{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommonRegister;
