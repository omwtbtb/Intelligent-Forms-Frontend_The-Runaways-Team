import React, { useState } from "react";
import NavBar2 from "../NavBar2";
import "./UpdateForm.css";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Divider, Pagination } from "@mui/material";
import FormActions from "./FormActions";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { getTemplatesByUserId } from "../../API/TemplateAPI/TemplateAPI";
import { useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';

const rowsPerPage = 4;



function MyTable({data, OnAction}){
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const start = page * rowsPerPage;
  const end = start + rowsPerPage;
  const rows = data.slice(start, end);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
              <TableCell key={"formTitle"} align="center">{"Form Title"}</TableCell>
              <TableCell key={"fillFormLink"} align="center">{"Fill Form Link"}</TableCell>
              <TableCell key={"formActions"} align="center">{"Actions"}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
                <TableCell key={'formTitle'} align="center">{[<PictureAsPdfIcon key={"pdf"}/>, row.formTitle]}</TableCell>
                <TableCell  key={'fillFormLink'} align="center">{<a href={`www.intelligentforms.azurewebistes.net/FillForm/${row.id}`}>{`intelligentforms.azurewebistes.net/FillForm/${row.id}`}</a>}</TableCell>
                <TableCell key={'formActions'} align="center">{<button onClick={OnAction} className="ActionsButton Hover">View Form Actions</button>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </TableContainer>
  );
}

function Update_Form() {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    getTemplatesByUserId(localStorage.getItem('userId'))
    .then(response => setData(response.data))
  },[])

  const [update, setupdate] = useState(true);


  function OnAction() {
    setupdate(false);
  }
  function OnAction1() {
    setupdate(true);
  }

  return (
    <div>
      <NavBar2 />
      {update && (
        <>
          <div className="container">
            <h2 className="Text">Forms</h2>
          </div>
          <div className="Linie1">
            <Divider />
          </div>
          <div className="Card">
            <div className="Icon">
            {data && <MyTable OnAction={OnAction} data={data}/>}
            </div>
          </div>
          <div className="Delimitation">© 2023 INTELLIGENT FORMS</div>
        </>
      )}
      {!update && (
        <div onClick={OnAction1} className="buttonBack">
          <ArrowCircleLeftIcon />
        </div>
      )}
      {!update && <FormActions />}
    </div>
  );
}

export default Update_Form;