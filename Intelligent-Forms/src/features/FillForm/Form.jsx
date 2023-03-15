import React, { useState, useEffect } from "react";
import "./Form.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import Button from "@mui/material/Button";

export default function Form({ form, onChildClick }) {
  const [valueNrInput, setValueNrInput] = useState(null);
  const [valueNrFractionInput, setValueNrFractionInput] = useState(null);
  const [valall, setValAll] = useState([{ name: "", value: "" }]);
  const [valueContent, setValueContent] = useState([""]);

  useEffect(() => {
    onChildClick(valueContent);
  }, [valueContent]);

  const HandlerAll = (
    event,
    index,
    dynamicField_Key,
    placeHolder_key,
    content,
    indexSection
  ) => {
    // if (valall[index].value === "") {
    const updatePlaceHolder = placeHolder_key.replace(/[<>]/g, "");
    const updatePlaceHolderNew = "&lt;" + updatePlaceHolder + "&gt;";
    const updateContent = [...valueContent];
    updateContent[indexSection] = content.replace(
      updatePlaceHolderNew,
      event.target.value
    );
    setValueContent(updateContent);
    console.log(updateContent);
    const updateText = [...valall, { name: "", value: "" }];
    updateText[index].name = dynamicField_Key;
    updateText[index].value = event.target.value;
    setValAll(updateText);
    // } else {
    //   console.log(valueContent);
    //   const updateNewContent = [...valueContent];
    //   console.log(updateNewContent);
    //   const updatedContent = updateNewContent[indexSection].replace(
    //     valall[index].value,
    //     event.target.value
    //   );
    //   updateNewContent[indexSection] = updatedContent;
    //   console.log(updatedContent);
    //   setValueContent(updateNewContent);
    // }
  };

  return (
    <div className="form">
      <div className="form-completion">
        {form.sections.map((section, indexSection) => (
          <div key={section.sectionName}>
            <h3 className="SectionName">{section.sectionName}</h3>
            <table>
              <tbody>
                {section.fields.map((field, indexField) => (
                  <tr key={field.dynamicField_Key}>
                    <td>
                      <label htmlFor={field.dynamicField_Key}>
                        <p className="DynamicField_Key">
                          {field.dynamicField_Key}
                          {field.mandatory ? <>*</> : null}
                        </p>
                      </label>
                    </td>

                    <td>
                      {field.fieldType === "Single-choice" ? (
                        <>
                          <RadioGroup
                            aria-label={field.dynamicField_Key}
                            name={field.dynamicField_Key}
                          >
                            {field.options.map((option, index) => (
                              <FormControlLabel
                                key={index}
                                value={option}
                                control={<Radio />}
                                label={option}
                              />
                            ))}
                          </RadioGroup>
                        </>
                      ) : null}

                      {field.fieldType === "Multiple-choice" ? (
                        <>
                          {field.options.map((option, index) => {
                            return (
                              <>
                                <FormGroup>
                                  <FormControlLabel
                                    control={<Checkbox />}
                                    label={option}
                                  />
                                </FormGroup>
                              </>
                            );
                          })}
                        </>
                      ) : null}

                      {field.fieldType === "Text" ? (
                        <>
                          <div className="Pozitionare">
                            <InputText
                              className="p-inputtext-sm"
                              id={field.dynamicField_Key}
                              name={field.dynamicField_Key}
                              placeholder="Text Value"
                              pattern="[A-Za-z]+"
                              title="Introduceți numai litere"
                              onChange={(e) =>
                                HandlerAll(
                                  e,
                                  indexField,
                                  field.dynamicField_Key,
                                  field.placeHolder_Key,
                                  section.content,
                                  indexSection
                                )
                              }
                            />
                          </div>
                        </>
                      ) : null}
                      {field.fieldType === "Number" ? (
                        <>
                          <div className="Pozitionare">
                            <InputNumber
                              inputId="integeronly"
                              className="p-inputtext-sm"
                              placeholder="Number Value"
                              onValueChange={(e) => setValueNrInput(e.value)}
                            />
                          </div>
                        </>
                      ) : null}

                      {field.fieldType === "Date" ? (
                        <>
                          <div className="Pozitionare">
                            <Calendar
                              className="p-inputtext-sm"
                              placeholder="dd/mm/yyyy"
                              onChange={(e) =>
                                HandlerAll(
                                  e,
                                  indexField,
                                  field.dynamicField_Key,
                                  field.placeHolder_Key,
                                  section.content,
                                  indexSection
                                )
                              }
                            />
                          </div>
                        </>
                      ) : null}

                      {field.fieldType === "Decimal" ? (
                        <>
                          <div className="Pozitionare">
                            <InputNumber
                              className="p-inputtext-sm"
                              inputId="minmaxfraction"
                              placeholder="Decimal Value"
                              value={valueNrFractionInput}
                              onValueChange={(e) =>
                                setValueNrFractionInput(e.value)
                              }
                            />
                          </div>
                        </>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="Scann">
              <Button variant="outlined">{section.documentType}</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="Submit">
        <Button variant="outlined" className="p-inputtext-sm">
          Submit
        </Button>
      </div>
    </div>
  );
}
