import axios from 'axios'

const SubmissionAPI=axios.create({})

const getSubmissionByFormIdURL='https://intelligentformsapi.azurewebsites.net/api/v1/submissions?formId='

export const getSubmissionByFormId = async ( formId:string) => {
   console.log( `${getSubmissionByFormIdURL}${formId}`)
    const response = await SubmissionAPI.get(`${getSubmissionByFormIdURL}${formId}`)

    return response
}