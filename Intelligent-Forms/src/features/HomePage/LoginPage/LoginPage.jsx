import React, { useState } from "react";
import NavBar from "../FirstPage/NavBar";
import "./LoginPage.css";
import { loginUserAPI } from "../../API/UserAPI/UserAPI";
import { createUserAPI } from "../../API/UserAPI/UserAPI";
import { Button } from 'primereact/button';

import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";

function LoginForm() {
const[email, setEmail] = useState('')
const[password, setPassword] = useState('')

const signIn = async()=>{
  const LoginCredential ={
    "emailAddress": email,
    "password": password
  };
 

  try{
        const response = await loginUserAPI(LoginCredential)
        console.log(response.data)
        if(response.status==200)
        {
        localStorage.setItem('isLogin',true)
        localStorage.setItem('userId',response.data.id)
        console.log(localStorage)
        window.location.href = "/Update_Form"
        }

  }
  catch(error) {
    console.error(error);
  }

}



  return (
    <div className="LoginForm">
      <label className="Label" htmlFor="email1">
        Email
      </label>
      <input
      required
        className="Input Focus"
        placeholder=" Enter your email..."
        type="email"
        id="email1"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="Label" htmlFor="pwd1">
        Password
      </label>
      <input
      required
        className="Input Focus"
        placeholder=" Enter password"
        type="password"
        id="pwd1"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="SubmitButton Hover" type="submit" id="submt" onClick={signIn}>
        LogIn

      
      </button>
      
    </div>
  );
}

function RegisterForm() {
  const[registerName, settingName]= useState('')
const[registerEmail, settingEmail] = useState('')
const[registerAddress, settingAddress]= useState('')
const[registerPassword, settingPassword]= useState('')

function registered()
{
  window.location.href='/Login_Register'
}

const signUp = async()=>{
  const RegisterCredential ={
   "name": registerName,
   "address": registerAddress,
   "emailAddress": registerEmail,
   "password": registerPassword
  }
  try{
      const response= await createUserAPI(RegisterCredential)
      if(response.status==200)
      {
        registered()
      }
  }
  catch(error){
      console.error(error)
  }
}
  return (
    <div className="RegisterForm">
      <label className="Label" htmlFor="accountName">
        Account Name
      </label>
      <input
      required
        className="Input Focus"
        placeholder=" Enter your name"
        type="text"
        id="accountName"
        value={registerName}
        onChange={(e) => settingName(e.target.value)}
      />
      <label className="Label" htmlFor="address">
        Address
      </label>
      <input
      required
        className="Input Focus"
        placeholder=" Enter your addresss"
        type="text"
        id="address"
        value={registerAddress}
        onChange={(e) => settingAddress(e.target.value)}
      />
      <label className="Label" htmlFor="email2">
        Email
      </label>
      <input
      required
        className="Input Focus"
        placeholder=" Enter your email..."
        type="email"
        id="email2"
        value={registerEmail}
        onChange={(e) => settingEmail(e.target.value)}
      />
      <label className="Label" htmlFor="pwd2">
        Password
      </label>
      <input
      required
        className="Input Focus"
        placeholder=" Enter password"
        type="password"
        id="pwd2"
        value={registerPassword}
        onChange={(e) => settingPassword(e.target.value) }
      />

      <button onClick={signUp} className="SubmitButton" type="submit" id="submt">
       Register


      </button>
      
    </div>
  );
}

function Test() {
  const [login, setlogin] = useState(true);
  const [register, setregister] = useState(false);


  function LoginClik() {
    setlogin(true);
    setregister(false);
  }

  function RegisterClick() {
    setlogin(false);
    setregister(true);
  }

  const handlesubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Test">
      <NavBar />
      <div className="main-login">
        <div className="Login-contain">
          <div className="Left-side">
            <form className="formClass" onSubmit={handlesubmit}>
              <button className="LoginButton" onClick={LoginClik}>
                Login
              </button>
              <button className="RegisterButton" onClick={RegisterClick}>
                Register
              </button>
              {login && <LoginForm />}

              {register && <RegisterForm />}
            </form>
          </div>
          <div className="Right-side">
            <div className="Poza">
              {login && <img src="images/LoginPage.png" alt="Logo" />}

              {register && <img src="images/Register.png" alt="Logo" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;