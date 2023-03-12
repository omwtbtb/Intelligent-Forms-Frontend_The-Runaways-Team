import React, { useState, useEffect } from "react";
import Form from "./Form";
import ViewForm from "./ViewForm";
import "./FillForm.css";
import { getTemplate } from "../API/TemplateAPI/TemplateAPI";
import { ProgressSpinner } from "primereact/progressspinner";

export default function FillForm() {
  const [dataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getTemplate();
      setDataResponse(response.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="All">
        {dataResponse ? (
          <>
            <Form form={dataResponse} />
            <ViewForm form={dataResponse} />
          </>
        ) : (
          <>
            <div className="card flex justify-content-center">
              <ProgressSpinner />
            </div>
          </>
        )}
      </div>
    </>
  );
}
