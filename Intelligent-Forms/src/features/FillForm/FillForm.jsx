import React, { useState, useEffect } from "react";
import Form from "./Form";
import ViewForm from "./ViewForm";
import "./FillForm.css";
import { getTemplate } from "../API/TemplateAPI/TemplateAPI";
import { ProgressSpinner } from "primereact/progressspinner";

export default function FillForm() {
  const [dataResponse, setDataResponse] = useState(null);
  const [content, setContent] = useState([""]);

  useEffect(() => {
    async function fetchData() {
      const response = await getTemplate();
      setDataResponse(response.data);
    }
    fetchData();
  }, []);

  const handleChildClick = (value) => {
    setContent(value);
    console.log(value);
  };

  return (
    <>
      <div className="All">
        {dataResponse ? (
          <>
            <Form form={dataResponse} onChildClick={handleChildClick} />
            <ViewForm form={dataResponse} updateContent={content} />
          </>
        ) : (
          <>
            <div className="card flex justify-content-center">
              <ProgressSpinner />
            </div>
          </>
        )}
        <div className="Delimitation">© 2023 INTELLIGENT FORMS</div>
      </div>
    </>
  );
}
