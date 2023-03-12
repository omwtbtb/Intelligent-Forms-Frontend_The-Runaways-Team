import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Profile from "../../User/Profile/Profile";
import Templates from "../../User/Templates/Templates";

import Update_Form from "../../User/UpdateForm/Update_Form";

import FirstPage from "../FirstPage/FirstPage";
import LoginPage from "../LoginPage/LoginPage";
import Submissions_Forms from "../../User/Submissions/Submissions_Forms";
import FillForm from "../../FillForm/FillForm";
function AppRouter() {
  const isLoogin = false;

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            localStorage.getItem("isLogin") ? <Profile /> : <FirstPage />
          }
        />
        <Route
          exact
          path={
            localStorage.getItem("isLogin") ? "/Update_Form" : "/Contact_Us"
          }
          element={localStorage.getItem("isLogin") && <Update_Form />}
        />
        <Route
          exact
          path={localStorage.getItem("isLogin") && "/Submissions_Forms"}
          element={localStorage.getItem("isLogin") && <Submissions_Forms />}
        />
        <Route
          exact
          path={
            localStorage.getItem("isLogin") ? "/Create_Form" : "/Login_Register"
          }
          element={
            localStorage.getItem("isLogin") ? <Templates /> : <LoginPage />
          }
        />
        <Route exact path={"/FillForm/:id"} element={<FillForm />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
