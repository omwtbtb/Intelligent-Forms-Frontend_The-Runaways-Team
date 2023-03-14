import React, { useEffect, useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';

function PDFViewer() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const pdfRef = useRef();

  useEffect(() => {
    generatePDF();
  }, [inputValue]);

  const generatePDF = () => {
    const element = pdfRef.current;
    const options = {
      margin: [0, 0, 0, 0],
      filename: 'example.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Modify the PDF content using the input value
    const inputElement = element.querySelector('#input-field');
    if (inputElement) {
      inputElement.textContent = inputValue;
    }

    html2pdf().set(options).from(element).toPdf().get('pdf').then((pdf) => {
      const pdfUrl = URL.createObjectURL(pdf.output('blob'));
      setPdfUrl(pdfUrl);
    });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <iframe src={pdfUrl} width="100%" height="500px" />
      <div ref={pdfRef}>
        <p>The input value is: <span id="input-field"></span></p>
      </div>
    </div>
  );
}

export default PDFViewer;