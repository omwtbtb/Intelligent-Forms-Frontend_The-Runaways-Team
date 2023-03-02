import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FirstPage from "../FirstPage/FirstPage";
import Test from "../LoginPage/Test";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FirstPage />} />
        <Route exact path="/Contact_Us" element={<Test />} />
        <Route exact path="/Login_Register" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
