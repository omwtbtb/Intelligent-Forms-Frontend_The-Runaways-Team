import React from "react";
import "./FirstPage.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="Nav-Bar">
      <div className="Form">
        <img src="images/Logo.png" alt="Logo" />
        <div className="Inf1">Intelligent Forms</div>
      </div>
      <Link to="/" className="Home">
        Home
      </Link>
      <Link to="/Contact_Us" className="Contact-Us">
        Contact Us
      </Link>
      <div className="Login_Register">
        <img src="images/Login.png" alt="Logo" />
        <Link to="/Login_Register" className="Inf2">
          Login/Register
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
