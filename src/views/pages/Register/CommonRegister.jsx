import React,{useState} from "react";
import Logo from "../../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {AxiosInstance} from '../../../assets/script/js/axios/BaseAxios'
import {HandleMessages} from '../../../assets/script/js/Events/Auth/Register/Register'
import {useParams} from 'react-router-dom'
import axios from 'axios'
function CommonRegister() {
  const {type}=useParams()

  const [FirstName,setFirstName]=useState("")
  const [LastName,setLastName]=useState("")
  const [Email,setEmail]=useState("")
  const [Username,setUsername]=useState("")
  const [Password,setPassword]=useState("")
  const [PhoneNumber,setPhoneNumber]=useState("")
  const [error,setError]=useState("")
  const HandleRegistration=async e=>{




    HandleMessages  (
      ".SuccessMessage",
      ".ErrorMessage",
      "none",
      "none"
    )


    e.preventDefault()

    let UserData={}
    if(type!="student"){
      UserData={
        firstName:FirstName,
        lastName:LastName,
        email:Email,
        password:Password,
        phone:PhoneNumber,
      }
    }else{
      UserData={
        username:Username,
        firstName:FirstName,
        lastName:LastName,
        email:Email,
        password:Password,
        phone:PhoneNumber,
      }
    }
  
    console.log(UserData)

    await AxiosInstance.post(`${type}/register`,UserData)

    .then(res=>{

      if(res.data['details']){

        setError(res.data['details'][0].message)
        HandleMessages  (
            ".SuccessMessage",
            ".ErrorMessage",
            "none",
            "block"
          )
    }else{
        HandleMessages  (
            ".SuccessMessage",
            ".ErrorMessage",
            "block",
            "none"
          )
    }
    })
    .catch(err=>{
      console.log(err)

      setError(err.message)

      HandleMessages  (
        ".SuccessMessage",
        ".ErrorMessage",
        "none",
        "block"
      )
    });
  }
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
   
        <form className="common-registration-form">
          <div className="input-wrapper">
            <label>first name</label>
            <input type="text" onChange={e=>setFirstName(e.target.value)}/>
          </div>
          <div className="input-wrapper">
            <label>last name</label>
            <input type="text" onChange={e=>setLastName(e.target.value)} />
          </div>
          {
            type=="student"&&(
              <div className="input-wrapper">
            <label>Username</label>
            <input type="text" onChange={e=>setUsername(e.target.value)} />
          </div>
            )
          }
          <div className="input-wrapper">
            <label>EMAIL ADDRESS</label>
            <input type="email" onChange={e=>setEmail(e.target.value)} />
          </div>

          <div className="input-wrapper">
            <label>CREATE A PASSWORD</label>
            <input type="password" onChange={e=>setPassword(e.target.value)} />
          </div>

          <div className="input-wrapper">
            <label>PHONE NUMBER</label>
            <input type="text" onChange={e=>setPhoneNumber(e.target.value)}/>
          </div>

          <input type="submit" value="sign up" onClick={HandleRegistration}/>


          <div className="SuccessMessage" style={{display:"none"}}>
            <p>Wow! {FirstName} {LastName} you have registered</p>
          </div>

          <div className="ErrorMessage"style={{display:"none"}}>
            <p>{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommonRegister;
