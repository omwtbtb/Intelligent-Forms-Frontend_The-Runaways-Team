import React from "react";
import "./FormActions.css"

function FormActions() {
  return (
    <div>
      <div className="Card1">
      <div className="PozaPDF">
        <img src="images/pdf.png" alt="Logo" />
      </div>
      <div className="Delimitation">© 2023 INTELLIGENT FORMS</div>
    </div>
    <button className="EditButton" type="edit" id="editt">Edit Form</button>
    <button className="DeleteButton" type="delete" id="deletee">Delete Form</button>
    <button className="ViewButton" type="view" id="view1">View Subbmissions</button>
    </div>
  );
}

export default FormActions;
