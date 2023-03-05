import React from "react";
import NavBar2 from "../NavBar2";
import "./UpdateForm.css";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Link } from 'react-router-dom';
import QrCodeIcon from '@mui/icons-material/QrCode';

import { Divider, Pagination } from "@mui/material";

function Update_Form() {
  return (
    <div>
      <NavBar2 />
      <div className="container"><h2 className="Text">Forms</h2></div>
      <div className="Linie1"><Divider /></div>
      <div className="Card">
        <div className="Icon">
          <PictureAsPdfIcon />
          <label className="Label1">Form 1</label>
          <div className="Link">
          <Link to="https://dev.azure.com/ASSISTTechChallenge2023/The%20Runaways/_backlogs/backlog/The%20Runaways%20Team/Epics">
            https://dev.azure.com/ASSISTTechChallenge2023/The%20Runaways/_backlogs/backlog/The%20Runaways%20Team/Epics
          </Link>
          </div>
          <div className="QR">
          <QrCodeIcon />
          </div>
          <div className="Linie"><Divider /></div>
          <div className="Pagination"><Pagination count={3}/></div>
        </div>
      </div>
        <div className="Delimitation">© 2023 INTELLIGENT FORMS</div>
  </div>
  );
}

export default Update_Form;
