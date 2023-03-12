import React from "react";
import axios from "axios";

const TemplateAPI = axios.create({});

const FormCreateURL =
  "https://intelligentformsapi.azurewebsites.net/api/v1/forms?userId=";

const GetTempletsURL =
  "https://intelligentformsapi.azurewebsites.net/api/v1/forms/fe94f04a-7dbb-4b8b-6dbf-08db23103957";

const getTemplatesByUserIdURL='https://intelligentformsapi.azurewebsites.net/api/v1/forms?userId='

export const createTemplate = async (Template: any, userId: string) => {
  const response = await TemplateAPI.post(
    `${FormCreateURL}${userId}`,
    Template
  );
  return response;
};

export const getTemplate = async () => {
  const response = await TemplateAPI.get(`${GetTempletsURL}`);
  return response;
};

export const getTemplatesByUserId = async ( userId:string) => {
    const response=await TemplateAPI.get(`${getTemplatesByUserIdURL}${userId}`)
    console.log(response);

    return response
}