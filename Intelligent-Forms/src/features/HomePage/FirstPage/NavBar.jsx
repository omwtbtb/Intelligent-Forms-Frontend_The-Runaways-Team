import React, { useState } from "react";
import "./FirstPage.css";
import { Link } from "react-router-dom";

function NavBar() {

const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
}

  return (
    <div className="Nav-Bar">
      <div className="Form">
        <img src="images/Logo.png" alt="Logo"/>
        <div className="Inf1">Intelligent Forms</div>
      </div>
      <Link to="/" className="Home">
        Home
      </Link>
      <div className="Login_Register">
      <img src="images/Login.png" alt="Logo" onClick={toggleMenu} className="ProfileIcon"/>
      {menuOpen &&
      <div className="dropdown-menu">
        <Link className="Inf2" to='/Login_Register' state={{ LOGIN: true, REGISTER: false }}>Log In</Link> 
        <Link className="Inf2" to='/Login_Register' state={{ LOGIN: false, REGISTER: true }}>Register</Link>
        </div>
      }
      </div>
    </div>
  );
}

export default NavBar;