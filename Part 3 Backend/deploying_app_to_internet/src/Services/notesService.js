import axios from "axios";
const baseUrl ='http://localhost:3031/api/notes'


// Promises and Errors

const getAll = () =>{
    const request = axios.get(baseUrl)
    const nonExisting = {
        id : 10000,
        content  : 'This note i snot saved to server',
        important : true ,
    }

    return request.then(response => response.data.concat(nonExisting))
}

const create = newObject =>{
    return axios.post(baseUrl,newObject)
}

const update = (id,newObject)=>{
    console.log('Update url');
    console.log(`${baseUrl}/${id}`);

    return axios.put(`${baseUrl}/${id}` , newObject)
}


export default{
    getAll ,create ,update
}