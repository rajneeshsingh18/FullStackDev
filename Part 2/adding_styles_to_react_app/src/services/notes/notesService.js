import axios from "axios";
// const baseUrl ='/api/notes'
const baseUrl =' http://localhost:3031/notes'



// Promises and Errors

const getAll = () =>{
    const request = axios.get(baseUrl)
    const nonExisting = {
        id : 10000,
        content  : 'This note is not saved to server',
        important : true ,
    }

    return request.then(response => response.data.concat(nonExisting))
}


/*
const getAll = async () =>{
    // return axios.get(baseUrl)

    const request = axios.get(baseUrl);
    const response = await request;
    return response.data;
}

*/

const create = newObject =>{
    return axios.post(baseUrl,newObject)

    // const request = axios.post(baseUrl,newObject)
    // return request.then(response=>response.data)
}

const update = (id,newObject)=>{
    console.log('Update url');
    console.log(`${baseUrl}/${id}`);

    return axios.put(`${baseUrl}/${id}` , newObject)

    // const request = axios.put(`${baseUrl}/${id}`, newObject)
    // return request.then(response => response.data)
}

//  the names of the keys and the assigned variables are the same
//--> the object definition with a more compact syntax
export default{
    // getAll : getAll,
    // create : create ,
    // update : update

    getAll ,create ,update
}