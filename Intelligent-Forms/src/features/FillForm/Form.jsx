import React, { useState } from "react";
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

export default function Form({ form }) {
  const [valueNrInput, setValueNrInput] = useState(null);
  const [date, setDate] = useState(null);
  const [valueNrFractionInput, setValueNrFractionInput] = useState(null);

  return (
    <div className="form">
      <div className="form-completion">
        {form.sections.map((section) => (
          <div key={section.sectionName}>
            <h3 className="SectionName">{section.sectionName}</h3>
            <table>
              <tbody>
                {section.fields.map((field) => (
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
                          {field.options.map((option, index) => {
                            return (
                              <>
                                <RadioGroup
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  name="radio-buttons-group"
                                >
                                  <FormControlLabel
                                    value="test"
                                    control={<Radio />}
                                    label={option}
                                  />
                                </RadioGroup>
                              </>
                            );
                          })}
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
                              value={valueNrInput}
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
                              value={date}
                              onChange={(e) => setDate(e.date)}
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
    </div>
  );
}
