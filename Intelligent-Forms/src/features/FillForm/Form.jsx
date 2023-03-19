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
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { CreateSubmission, SendScan } from "../API/SubmissionAPI/SubmissionAPI";

export default function Form({ form, onChildClick, TemplateID, ChildContent }) {
  const [valall, setValAll] = useState([
    { section: [{ label: "", value: "" }] },
  ]);
  const [valueContent, setValueContent] = useState([""]);
  const [selectedOption, setSelectedOption] = useState([
    { section: [null], index: 0 },
  ]);
  const [contentall, setContentAll] = useState("");
  const [selectedFiles, setSelectedFiles] = useState({ name: "", img: null });
  const [dataScan, setDataSan] = useState(null);
  const [genaralValue, setGeneralValue] = useState([""]);
  const [bollean, setBollean] = useState(false);
  const [indexsection, setIndexSection] = useState(0);
  const [contentPdf, setConentPdf] = useState("");
  const [formsub, setFormSub] = useState(false);

  useEffect(() => {
    onChildClick(valueContent);
  }, [valueContent]);

  useEffect(() => {
    let updateallcontent = "";
    form.sections.map((section) => {
      updateallcontent += section.content;
    });
    setContentAll(updateallcontent);
  }, []);

  useEffect(() => {
    ChildContent(contentPdf);
  }, [contentPdf]);

  useEffect(() => {
    genaralValue.map((valuegenerate, index) => {
      if (valuegenerate !== null) {
        const updateText = [...valall];
        if (!updateText[indexsection].section[index]) {
          updateText[indexsection].section[index] = {};
        }

        updateText[indexsection].section[index].value = valuegenerate;
        form.sections.map((section, indexs) => {
          section.fields.map((field, indexf) => {
            if (indexs === indexsection && indexf === index) {
              updateText[indexsection].section[index].label =
                field.dynamicField_Key;
            }
          });
        });

        setValAll(updateText);
      }
    });
  }, [genaralValue]);

  const handleFileSelect = (event, sectionname) => {
    const updateselectedFiles = { ...selectedFiles };
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      updateselectedFiles.img = e.target.result;
      updateselectedFiles.name = sectionname;
      setSelectedFiles(updateselectedFiles);
    };
    reader.readAsDataURL(file);
  };

  const HandlerClickScan = async (indexSection) => {
    setIndexSection(indexSection);
    let response = await SendScan(JSON.parse(JSON.stringify(selectedFiles)));
    setDataSan(response.data);
    setBollean(true);
  };

  const HandlerAll = (
    event,
    index,
    dynamicField_Key,
    placeHolder_key,
    content,
    indexSection
  ) => {
    const targetValue = event.target ? event.target.value : event.value;

    const updatePlaceHolder = placeHolder_key.replace(/[<>]/g, "");
    const updatePlaceHolderNew = "&lt;" + updatePlaceHolder + "&gt;";
    const updateContent = [...valueContent];
    updateContent[indexSection] = content.replace(
      updatePlaceHolderNew,
      targetValue
    );
    setValueContent(updateContent);

    const updateText = [...valall];
    if (!updateText[indexSection]) {
      updateText[indexSection] = { section: [] };
    }

    if (!updateText[indexSection].section[index]) {
      updateText[indexSection].section[index] = {};
    }
    updateText[indexSection].section[index].label = dynamicField_Key;
    updateText[indexSection].section[index].value = targetValue.toString();
    setValAll(updateText);
  };

  const HandlerCheckBox = (
    event,
    index,
    dynamicField_Key,
    indexSection,
    option,
    indexOptions
  ) => {
    if (event.target.checked) {
      const updateOption = [...selectedOption];
      updateOption[indexSection].section[indexOptions] = option;
      setSelectedOption(updateOption);
    } else {
      const updateOptionValue = [...selectedOption];
      const updateOption = selectedOption[indexSection].section.filter(
        (selected) => selected !== option
      );
      updateOptionValue[indexSection].section = updateOption;
      setSelectedOption(updateOptionValue);
    }

    const updateText = [...valall];
    if (!updateText[indexSection]) {
      updateText[indexSection] = { section: [] };
    }

    if (!updateText[indexSection].section[index]) {
      updateText[indexSection].section[index] = {};
    }
    const updateSectionID = [...selectedOption];
    updateSectionID[indexSection].index = index;
    setSelectedOption(updateSectionID);
    updateText[indexSection].section[index].label = dynamicField_Key;
    updateText[indexSection].section[index].value = "";
    setValAll(updateText);
  };

  const HandlerSubmit = async () => {
    const updatevalall = [...valall];
    if (selectedOption[indexsection].section.some((el) => el != null)) {
      const updateOption = [...selectedOption];
      updateOption.map((option, indexSection) => {
        option.section.map((date) => {
          updatevalall[indexSection].section[
            updateOption[indexSection].index
          ].value =
            updatevalall[indexSection].section[updateOption[indexSection].index]
              .value +
            date +
            ",";
        });
      });
      setValAll(updatevalall);
    }

    const NewArray = {
      submissionFields: valall
        .map((section) => section.section)
        .flat()
        .map(({ label, value }) => ({ label, value })),
      content: "Test",
    };

    let updatedContentAll = contentall;
    let index = 0;
    form.sections.map((section) => {
      section.fields.map((field) => {
        const updatePlaceHolder = field.placeHolder_Key.replace(/[<>]/g, "");
        const updatePlaceHolderNew = "&lt;" + updatePlaceHolder + "&gt;";
        updatedContentAll = updatedContentAll.replace(
          updatePlaceHolderNew,
          NewArray.submissionFields[index].value
        );
        index = index + 1;
      });
    });
    NewArray.content = updatedContentAll;
    setConentPdf(updatedContentAll);
    setFormSub(true);
    await CreateSubmission(TemplateID, JSON.parse(JSON.stringify(NewArray)));
  };

  const Functie = (
    document_KeyWords,
    indexField,
    dynamicField_Key,
    indexSection
  ) => {
    const split = document_KeyWords.split(", ");
    const value = split.map((document) => {
      const value = Object.keys(dataScan).find((key) => {
        return key.includes(document);
      });
      return value ? dataScan[value] : null;
    });
    setGeneralValue((prevState) => [
      ...prevState.slice(0, indexField),
      value[0],
      ...prevState.slice(indexField + 1),
    ]);

    setBollean(false);
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
                          >
                            {field.options.map((option) => (
                              <FormControlLabel
                                value={option}
                                disabled={formsub}
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
                                <FormGroup disabled={formsub}>
                                  <FormControlLabel
                                    onChange={(e) =>
                                      HandlerCheckBox(
                                        e,
                                        indexField,
                                        field.dynamicField_Key,
                                        indexSection,
                                        option,
                                        index
                                      )
                                    }
                                    disabled={formsub}
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
                              disabled={formsub}
                              value={
                                bollean
                                  ? Functie(
                                      field.document_KeyWords,
                                      indexField,
                                      field.dynamicField_Key,
                                      indexSection
                                    )
                                  : valall[indexSection]?.section[indexField]
                                      ?.value
                              }
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
                              value={genaralValue[indexField]}
                              className="p-inputtext-sm"
                              placeholder="Number Value"
                              disabled={formsub}
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

                      {field.fieldType === "Date" ? (
                        <>
                          <div className="Pozitionare">
                            <Calendar
                              className="p-inputtext-sm"
                              value={genaralValue[indexField]}
                              placeholder="dd/mm/yyyy"
                              disabled={formsub}
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
                              value={genaralValue[indexField]}
                              placeholder="Decimal Value"
                              disabled={formsub}
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {section.documentType !== "None" ? (
              <div className="Scann">
                <FileUploadIcon
                  className="IconFile"
                  disabled={formsub}
                  onClick={() =>
                    document
                      .getElementById(`fileInput-${section.documentType}`)
                      .click()
                  }
                />

                <input
                  hidden
                  disabled={formsub}
                  accept="image/*"
                  type="file"
                  id={`fileInput-${section.documentType}`}
                  onChange={(e) => handleFileSelect(e, section.documentType)}
                />

                <Button
                  type="file"
                  variant="outlined"
                  component="label"
                  onClick={() => HandlerClickScan(indexSection)}
                  disabled={formsub}
                >
                  {section.documentType}(Auto-Complete)
                </Button>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
        <div className="Submit">
          <Button
            variant="outlined"
            className="p-inputtext-sm"
            onClick={HandlerSubmit}
            disabled={formsub}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
