import axios from "axios";

const baseUrl = 'http://localhost:3003/persons'

// const baseUrl = '/api/persons'


//-->2.13: The Phonebook step8
//Promises and Errors

const getAll=()=>{
    return axios.get(baseUrl)
}

const create = newPersons =>{
    return axios.post(baseUrl,newPersons)
}

const erase = (id)=>{
  

    return   axios.delete(`${baseUrl}/${id}`)
}

export default{
    getAll , create ,erase
}