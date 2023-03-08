
import React, { useState } from "react";
import NavBar2 from "../NavBar2";
import "./ProfilePage.css";
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';


function RegisterForm() {
  return (
    <div className="RegisterForm">
      <label className="Label" htmlFor="accountName">
        Account Name
      </label>
      <input
        className="Field Focus"
        placeholder=" Enter your name"
        type="text"
        id="accountName"
      />
      <label className="Label" htmlFor="address">
        Address
      </label>
      <input
        className="Field Focus"
        placeholder=" Enter your name"
        type="text"
        id="address"
      />
      <label className="Label" htmlFor="email2">
        Email
      </label>
      <input
        className="Field Focus"
        placeholder=" Enter your email..."
        type="email"
        id="email2"
      />
      <label className="Label" htmlFor="pwd2">
        Password
      </label>
      <input
        className="Field Focus"
        placeholder=" Enter password"
        type="password"
        id="pwd2"
      />
      
    </div>
  );
}


function Profile() {
  const [login, setlogin] = useState(true);
  const [register, setregister] = useState(false);
  const[isEdit, setEdit] = useState(false);

  function LoginClik() {
    setlogin(true);
    setregister(false);
  }

  function RegisterClick() {
    setlogin(false);
    setregister(true);
  }
function EditClick(){
  setEdit(true);

}

function CancelClick(){
  setEdit(false);
}
  const handlesubmit = (event) => {
    event.preventDefault();
  };


  return (
    <div className="Profile">
      <NavBar2 />
      <div className="main-login">
        <div className="Login-contain">
          <div className="Left-side">
            <form onSubmit={handlesubmit}>
            <div className="Poza">
              <img src="images/ProfilePage.png" alt="Logo" />
              
            </div>
            
            </form>
            <label className="Mpf">My Profile  </label>
          </div>
          <div className="Right-side Padding">
           
            <RegisterForm />

            <label className="Margin">Change password </label>
           
            <br></br>
            
            {
              !isEdit&&
            
            <button className="ButtonEdit" onClick={EditClick}>
                Edit
              </button>
            }
              {
                isEdit && <>

              <button className="ButtonCancel"onClick={CancelClick}>Cancel</button>
              <button className=" ButtonSave">
                Save
              </button>
              
              </>
              }
          </div>
          
          
        </div>
      </div>
    
      <div className="Delimitation">© 2023 INTELLIGENT FORMS</div>
    
    </div>
     
  );
}

export default Profile;
