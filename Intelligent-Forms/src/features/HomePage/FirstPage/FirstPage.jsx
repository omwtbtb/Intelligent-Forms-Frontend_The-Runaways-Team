import React from "react";
import "./FirstPage.css";

import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function FirstPage() {
  return (
    <div className="FirstPage">
      <NavBar />
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
