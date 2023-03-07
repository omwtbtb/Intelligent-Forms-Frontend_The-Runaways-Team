import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import NavBar2 from "../NavBar2";
import EditorComponent from "./Editor";
import BasicSelect from "./Selecter";
import "./Templates.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Templates() {
  const [field, setfield] = React.useState("");
  const [val, setVal] = useState([""]);
  const [sect, setSect] = useState([
    { sectionName: "", content: "", values: [""] },
  ]);
  const [selectedValue, setSelectedValue] = useState("");
  const [IndexCurentSec, setIndexCurentSec] = useState(0);
  const [localEditorValue, setLocalEditorValue] = useState("");
  const [valueOpt, setValueOpt] = useState("");
  const [opt, setOpt] = useState([""]);

  const handleChange = (event: SelectChangeEvent) => {
    setfield(event.target.value);
    setValueOpt(event.target.value);
  };

  const handleDelete = (index) => {
    const updatedValues = val.filter((item, i) => i !== index);
    const updateSect = sect.map((item, i) => {
      if (i === IndexCurentSec) {
        const newValues = item.values.filter((item, i) => i !== index);
        return { ...item, values: newValues };
      } else {
        return item;
      }
    });
    setSect(updateSect);
    setVal(updatedValues);
  };

  const handleDeleteselection = (index) => {
    const updateSection = sect.filter((item, i) => i !== index);
    setSect(updateSection);
  };

  const handleDeleteOpt = (index) => {
    const updatedOpt = opt.filter((item, i) => i !== index);
    setOpt(updatedOpt);
  };

  const handleChanges = (e, index) => {
    const updatedValues = [...val];
    const updateSect = [...sect];

    updateSect[IndexCurentSec].values[index] = e.target.value;
    updatedValues[index] = e.target.value;
    console.log(sect);

    setVal(updatedValues);
  };

  const ChangeEventOpt = (e, index) => {
    const updatedOpt = [...opt];

    updatedOpt[index] = e.target.value;

    setOpt(updatedOpt);
  };

  const ChangeEvent = (e, index) => {
    const updatedSection = [...sect];

    updatedSection[index].sectionName = e.target.value;

    setSect(updatedSection);
  };

  const handleChildClick = (updatedSect) => {
    setSect(updatedSect);
  };

  const handleChangeSelectedSection = (currentIndex) => {
    const UpdateValue = sect[currentIndex].values;
    setVal([...UpdateValue]);
    setIndexCurentSec(currentIndex);
    setLocalEditorValue(sect[currentIndex].content);
  };

  const handleAddSection = () => {
    setSect((prevState) => [
      ...prevState,
      { sectionName: "", content: "", values: [""] },
    ]);
    setIndexCurentSec(sect.length);
    setLocalEditorValue("");
    setVal([""]);
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
                        onClick={() => handleChangeSelectedSection(index1)}
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
            <Button variant="outlined" size="small" onClick={handleAddSection}>
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
                <MenuItem value={"Text"}>Text</MenuItem>
                <MenuItem value={"Number"}>Number</MenuItem>
                <MenuItem value={"Decimal"}>Decimal</MenuItem>
                <MenuItem value={"Date"}>Date</MenuItem>
                <MenuItem value={"Single-choice"}>Single-choice</MenuItem>
                <MenuItem value={"Multiple-choice"}>Multiple-choice</MenuItem>
              </Select>
            </FormControl>
          </div>

          {(valueOpt === "Single-choice" || valueOpt === "Multiple-choice") && (
            <>
              <div className="options">Options</div>
              <div className="buttonsOpt">
                <div className="inputs">
                  {opt.map((item1, index) => {
                    return (
                      <div className="interor" key={index}>
                        <div className="int2">
                          <TextField
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            onChange={(e) => ChangeEventOpt(e, index)}
                          />
                        </div>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => handleDeleteOpt(index)}
                          startIcon={<DeleteIcon />}
                        >
                          Delete
                        </Button>
                      </div>
                    );
                  })}
                </div>
                <div className="btn">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => setOpt([...opt, ""])}
                  >
                    Add New
                  </Button>
                </div>
              </div>
            </>
          )}
          <div className="document">
            Document keywords:
            <div className="it">
              <TextField id="outlined-basic" variant="outlined" size="small" />
            </div>
          </div>
          <div className="content">Content:</div>
          <EditorComponent
            sect={sect}
            parentContent={localEditorValue}
            currentIndexSection={IndexCurentSec}
            onChildClick={handleChildClick}
          />
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
