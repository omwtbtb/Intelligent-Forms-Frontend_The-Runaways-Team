import React, { useState } from "react";
import NavBar2 from "../NavBar2";
import "./Templates.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import EditorComponent from "./Editor";
import BasicSelect from "./Selecter";
import DeleteIcon from "@mui/icons-material/Delete";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Templates() {
  const [field, setfield] = React.useState("");
  const [val, setVal] = useState([""]);
  const [sect, setSect] = useState([{ numeset: "", content: "" }]);
  const [selectedValue, setSelectedValue] = useState("");
  const [IndexCurentSec, setIndexCurentSec] = useState(0);

  const handleChange = (event: SelectChangeEvent) => {
    setfield(event.target.value);
  };

  const handleDelete = (index) => {
    const updatedValues = val.filter((item, i) => i !== index);
    setVal(updatedValues);
  };

  const handleDeleteselection = (index) => {
    const updatedValues = sect.filter((item, i) => i !== index);
    setSect(updatedValues);
  };

  const handleChanges = (e, index) => {
    const updatedValues = [...val];

    updatedValues[index] = e.target.value;

    setVal(updatedValues);
  };

  const ChangeEvent = (e, index) => {
    const updatedSection = [...sect];

    updatedSection[index].numeset = e.target.value;

    setSect(updatedSection);
  };

  const handleChildClick = (childValue) => {
    const updateEditor = [...sect];
    console.log(IndexCurentSec);
    console.log(sect);

    updateEditor[IndexCurentSec] = {
      ...updateEditor[IndexCurentSec],
      content: childValue,
    };
    console.log(updateEditor);

    setSect(updateEditor);
  };

  const HandlerAddSection = () => {
    setIndexCurentSec(sect.length - 1);
    setSect((preSteat) => [...preSteat, { numeset: "", content: "" }]);
  };

  return (
    <div>
      <NavBar2 />
      <div className="Card">
        <div className="container1">
          <div className="Title">
            Titlul:
            <div className="TextField">
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                size="small"
              />
            </div>
          </div>
          <div className="text">
            Dynamic Fields
            <div className="inputs">
              {val.map((item, index) => {
                return (
                  <div className="interor" key={index}>
                    <div className="int2">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value={item}
                        size="small"
                        onChange={(e) => handleChanges(e, index)}
                        onClick={() => setSelectedValue(item)}
                      />
                    </div>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleDelete(index)}
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="buttons">
            <Button
              variant="outlined"
              size="small"
              onClick={() => setVal([...val, ""])}
            >
              Add New
            </Button>
          </div>
          <div className="text">
            Sectiuni
            <div className="inputs">
              {sect.map((item1, index1) => {
                return (
                  <div className="interor" key={index1}>
                    <div className="int2">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        onChange={(e) => ChangeEvent(e, index1)}
                        onClick={() => setIndexCurentSec(index1)}
                      />
                    </div>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleDeleteselection(index1)}
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="buttons">
            <Button variant="outlined" size="small" onClick={HandlerAddSection}>
              Add New
            </Button>
          </div>
          <div className="data_retention">
            Data Retention Period:
            <div className="it3">
              <TextField
                id="outlined-number"
                label="Days"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  min: "0",
                  step: "1",
                }}
                size="small"
              />
            </div>
          </div>

          <div className="scan_document">
            Scan Document Type:
            <div className="it">
              <BasicSelect />
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="label">
            Label:
            <div className="it">
              <TextField
                disabled
                id="outlined-disabled"
                label="Disabled"
                size="small"
                value={selectedValue}
              />
            </div>
          </div>
          <div className="Placeholder">
            Placeholder keywords:
            <div className="it1">
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </div>
          </div>
          <div className="madatory">
            Mandatory: <Checkbox {...label} defaultChecked />
          </div>
          <div className="field_type">
            Field Type:
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                onChange={handleChange}
                autoWidth
                size="small"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Text</MenuItem>
                <MenuItem value={2}>Number</MenuItem>
                <MenuItem value={3}>Decimal</MenuItem>
                <MenuItem value={4}>Date</MenuItem>
                <MenuItem value={5}>Single-choice</MenuItem>
                <MenuItem value={6}>Multiple-choice</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="options">Options</div>
          <div className="buttons">
            <Button variant="outlined" size="small">
              Add New
            </Button>
          </div>
          <div className="document">
            Document keywords:
            <div className="it">
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </div>
          </div>
          <div className="content">Content:</div>
          <EditorComponent onChildClick={handleChildClick} />
        </div>
      </div>
      <div className="Create">
        <Button variant="outlined" size="small">
          Create
        </Button>
      </div>
      <div className="spatiere"></div>
      <div className="Delimitation">© 2023 INTELLIGENT FORMS</div>
    </div>
  );
}

export default Templates;
