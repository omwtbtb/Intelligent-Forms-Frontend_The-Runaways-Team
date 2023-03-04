import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Create_Form from "../../User/CreateForm/Create_Form";
import Profile from "../../User/Profile/Profile";
import Templates from "../../User/Templates/Templates";
import ContactUs from "../FirstPage/ContactUs";
import FirstPage from "../FirstPage/FirstPage";
import Test from "../LoginPage/Test";

function AppRouter() {
  const isLoogin = true;
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={isLoogin ? <Profile /> : <FirstPage />}
        />
        <Route
          exact
          path={isLoogin ? "/Templates" : "/Contact_Us"}
          element={isLoogin ? <Templates /> : <ContactUs />}
        />
        <Route
          exact
          path={isLoogin ? "/Create_Form" : "/Login_Register"}
          element={isLoogin ? <Create_Form /> : <Test />}
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
