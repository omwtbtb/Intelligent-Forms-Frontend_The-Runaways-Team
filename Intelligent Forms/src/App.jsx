import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [tests, SetTest] = useState([]);

  useEffect(() => {
    axios
      .get("https://intelligentformsapi.azurewebsites.net/test")
      .then((response) => {
        SetTest(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {tests.id} , {tests._self}
    </div>
  );
}

export default App;
