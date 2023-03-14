import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import "./ViewForm.css"
import Button from "@mui/material/Button";
import { ProgressSpinner } from "primereact/progressspinner";
import { deleteTemplateById } from "../API/TemplateAPI/TemplateAPI";

export default function ViewForm({ form }) {
  const [viewForm, setViewForm] = useState(null);

  function handleCreatePDF() {
    const element = document.getElementById("pdfContent");
    var opt = {
      margin: 1,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();

    html2pdf()
      .set(opt)
      .from(element)
      .outputPdf()
      .then(function (pdf) {
        const blob = new Blob([pdf], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        console.log(url);
        setViewForm(url);
      });
  }

  return (
    <div className="all">
      <div id="pdfContent">Test</div>
      <div className="ContainerFirst">
        <h4>ViewForm</h4>
        <div className="pdf-container">
          <div className="pdf">
            {viewForm && (
              <>
                <iframe src={viewForm} width="70%" height="400"></iframe>
              </>
            )}

            {!viewForm && (
              <>
                <ProgressSpinner />
              </>
            )}
          </div>
          <div className="Position">
            <Button
              variant="outlined"
              className="p-inputtext-sm"
              onClick={() => handleCreatePDF()}
            >
              Generate PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

