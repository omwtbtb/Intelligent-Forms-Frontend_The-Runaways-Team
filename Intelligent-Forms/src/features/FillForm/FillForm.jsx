import React, { useState, useEffect } from "react";
import Form from "./Form";
import ViewForm from "./ViewForm";
import "./FillForm.css";
import { getTemplate } from "../API/TemplateAPI/TemplateAPI";
import { ProgressSpinner } from "primereact/progressspinner";
import { useParams } from "react-router-dom";

export default function FillForm() {
  const [dataResponse, setDataResponse] = useState(null);
  const [content, setContent] = useState([""]);
  const [conentAll, setConentAll] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await getTemplate(id);
      setDataResponse(response.data);
    }
    fetchData();
  }, []);

  const handleChildClick = (value) => {
    setContent(value);
  };

  const HandlerAllContent = (value) => {
    setConentAll(value);
  };

  console.log(dataResponse);
  return (
    <>
      <div className="All">
        {dataResponse ? (
          <>
            <div className="Logo">
              <img src="images/Logo.png" alt="Logo" />
              {dataResponse.formTitle}
            </div>
            <div className="FormContainer">
              <Form
                form={dataResponse}
                onChildClick={handleChildClick}
                TemplateID={id}
                ChildContent={HandlerAllContent}
              />
              <ViewForm
                form={dataResponse}
                updateContent={content}
                conentPdfAll={conentAll}
              />
            </div>
          </>
        ) : (
          <>
            <ProgressSpinner />
          </>
        )}
        <div className="Delimitation">© 2023 INTELLIGENT FORMS</div>
      </div>
    </>
  );
}
