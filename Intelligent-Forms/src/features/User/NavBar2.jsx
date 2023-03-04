import React from "react";
import "../HomePage/FirstPage/FirstPage.css";
import { Link } from "react-router-dom";

function NavBar2() {
  return (
    <div className="Nav-Bar">
      <div className="Form">
        <img src="images/Logo.png" alt="Logo" />
        <div className="Inf1">Intelligent Forms</div>
      </div>
      <Link to="/Create_Form" className="Home">
        Create Form
      </Link>
      <Link to="/Templates" className="Contact-Us">
        Templates
      </Link>
      <div className="Login_Register">
        <img src="images/Login.png" alt="Logo" />
        <Link to="/" className="Inf2">
          Profile
        </Link>
      </div>
    </div>
  );
}

export default NavBar2;
