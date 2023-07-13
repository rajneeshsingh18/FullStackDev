import axios from "axios";

const baseUrl = 'http://localhost:3031/persons'

//-->2.13: The Phonebook step8
//Promises and Errors

const getAll=()=>{
    return axios.get(baseUrl)
}

const create = newPersons =>{
    return axios.post(baseUrl,newPersons)
}

const erase = (id)=>{
  

    return   axios.delete(`http://localhost:3031/persons/${id}`)
}

export default{
    getAll , create ,erase
}