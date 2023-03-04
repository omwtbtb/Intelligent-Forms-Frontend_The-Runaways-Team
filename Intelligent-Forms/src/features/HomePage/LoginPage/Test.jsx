import React, { useState } from "react";
import NavBar from "../FirstPage/NavBar";
import "./LoginPage.css";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function LoginForm() {
  return (
    <div className="LoginForm">
      <label className="Label" htmlFor="email1">
        Email
      </label>
      <input
        className="Input Focus"
        placeholder=" Enter your email..."
        type="email"
        id="email1"
      />
      <label className="Label" htmlFor="pwd1">
        Password
      </label>
      <input
        className="Input Focus"
        placeholder=" Enter password"
        type="password"
        id="pwd1"
      />
      <button className="SubmitButton" type="submit" id="submt">
        Submit
      </button>
    </div>
  );
}

function RegisterForm() {
  return (
    <div className="RegisterForm">
      <label className="Label" htmlFor="accountName">
        Account Name
      </label>
      <input
        className="Input Focus"
        placeholder=" Enter your name"
        type="text"
        id="accountName"
      />
      <label className="Label" htmlFor="address">
        Address
      </label>
      <input
        className="Input Focus"
        placeholder=" Enter your name"
        type="text"
        id="address"
      />
      <label className="Label" htmlFor="email2">
        Email
      </label>
      <input
        className="Input Focus"
        placeholder=" Enter your email..."
        type="email"
        id="email2"
      />
      <label className="Label" htmlFor="pwd2">
        Password
      </label>
      <input
        className="Input Focus"
        placeholder=" Enter password"
        type="password"
        id="pwd2"
      />
      <button className="SubmitButton" type="submit" id="submt">
        Submit
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
            <form onSubmit={handlesubmit}>
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
