import React from "react";
import "./FirstPage.css";
import { Menubar } from "primereact/menubar";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div className="FirstPage">
      <div className="Nav-Bar">
        <div className="Form">
          <img src="assets/Logo.png" alt="Logo" />
          <div className="Inf1">Intelligent Forms</div>
        </div>
        <Link to="/" className="Home">
          Home
        </Link>
        <Link to="/Contact_Us" className="Contact-Us">
          Contact Us
        </Link>
        <div className="Login_Register">
          <img src="assets/Login.png" alt="Logo" />
          <Link to="/Login_Register" className="Inf2">
            Login/Register
          </Link>
        </div>
      </div>
      <div className="Poza">
        <img src="assets/Form.png" alt="Logo" />
      </div>
      <div className="Welcome">Welcome to Intelligent Forms!</div>
      <div className="Semnatura">
        <img src="assets/Desen.png" alt="Logo" />
      </div>
      <div className="Text">
        Here we provide intelligent forms solutions to help streamline your data
        collection process. Say goodbye to manual data entry and hello to
        efficiency with Intelligent Forms.
      </div>

      <div className="Delimitation">© 2023 INTELLIGENT FORMS</div>
    </div>
  );
}

export default FirstPage;
