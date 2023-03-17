
import React, { useEffect, useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import "./ViewForm.css";
import parse from "html-react-parser";

export default function ViewForm({ form, updateContent }) {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    generatePDF();
  }, [updateContent]);

  const generatePDF = () => {
    const elements = document.querySelectorAll(".section");
    const tempContainer = document.createElement("div");

    const options = {
      margin: [0, 0, 0, 0],
      filename: "example.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    elements.forEach((element) => {
      const clonedElement = element.cloneNode(true);
      tempContainer.appendChild(clonedElement);
    });

    html2pdf()
      .set(options)
      .from(tempContainer)
      .toPdf()
      .get("pdf")
      .then((pdf) => {
        const pdfUrl = URL.createObjectURL(pdf.output("blob"));
        setPdfUrl(pdfUrl);
      });
  };

  return (
    <div>
      <div className="all">
        <h4>View Form</h4>
        <iframe src={pdfUrl} width="400px" height="500px" />
        <div className="Pdf" style={{ display: "none" }}>
          {form.sections.map((section, index) => (
            <div className="section" key={index}>
              {/* {parse(section.content)} */}
              {updateContent[index] === "" ||
              typeof updateContent[index] !== "string"
                ? parse(section.content)
                : parse(updateContent[index])}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
