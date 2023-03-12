// import React, { useRef } from "react";
// import html2pdf from "html2pdf.js";
// import "./ViewForm.css";

// export default function ViewForm({ form }) {
//   const embedRef = useRef(null);

//   function handleCreatePDF() {
//     const element = document.getElementById("pdfContent");
//     var opt = {
//       margin: 1,
//       filename: "myfile.pdf",
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//     };
//     html2pdf()
//       .set(opt)
//       .from(element)
//       .outputPdf()
//       .then(function (pdf) {
//         const url = URL.createObjectURL(pdf);
//         console.log(URL.createObjectURL(pdf));
//         embedRef.current.src = url;
//       });
//   }

//   return (
//     <div className="all2">
//       <div id="pdfContent">
//         <h1>{form.formTitle}</h1>
//         {form.sections.map((section) => (
//           <div key={section.sectionName}>
//             <h2>{section.sectionName}</h2>
//             <p>{section.content}</p>
//           </div>
//         ))}
//       </div>
//       {/* <button onClick={handleCreatePDF}>Create PDF</button> */}
//       {/* <embed
//         ref={embedRef}
//         type="application/pdf"
//         width="500px"
//         height="600px"
//       />  */}
//     </div>
//   );
// }

import React from "react";

function ViewForm() {
  return <div>ViewForm</div>;
}

export default ViewForm;
