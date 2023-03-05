import React, { useState } from "react";
import { Editor } from "primereact/editor";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function EditorComponent({ onChildClick }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const htmlValue = e.htmlValue;
    setText(htmlValue);
    onChildClick(htmlValue);
  };

  return (
    <div>
      <Editor
        value={text}
        onTextChange={handleChange}
        style={{ height: "120px" }}
      />
    </div>
  );
}

export default EditorComponent;
