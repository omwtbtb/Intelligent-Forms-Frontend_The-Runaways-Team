import React from "react";
import NavBar2 from "../NavBar2";
import "./Submission.css";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Link } from 'react-router-dom';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { Divider, Pagination } from "@mui/material";

import 'primeicons/primeicons.css';



function Submissions_Forms() {
    return (
      <div>
        <NavBar2 />
        <div className="container"><h2 className="Style">Submissions</h2>
            <h2 className="Style">Search by:</h2>
            <div className="Margin">
                 <input ></input>
            </div>
        </div>
      <div className="Linie1"><Divider /></div>
         <div className="Tabel">
            <div className="app-container">
               <table>
                  <thead>
                     <tr>
                        <th>Timestamp</th>
                        <th>Field1</th>
                        <th>Field2</th>
                        <th>Field3</th>
                        <th>Field4</th>
                        <th>Filed5</th>
                        <th>Download PDF</th>

                     </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>10.10.2023</td>
                          <td>Custome</td>
                          <td>Custome</td>
                          <td>Custome</td>
                          <td>Custome</td>
                          <td>Custome</td>

                          <td><i className="pi pi-download icon" style={{ fontSize: '1rem' }}></i></td>
                      </tr>
                      
                  </tbody>
                  
                  
               </table>
               <div className="Border"><Divider /></div>

            </div>
          
         </div>
      
        <div className="Delimitation">© 2023 INTELLIGENT FORMS</div>
     </div>
  );
}

export default Submissions_Forms;