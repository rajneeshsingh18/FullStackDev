console.log("Hello world");

// imports Node's built-in web server module
// import { createServer } from 'http';
// const http = require('http')

/*
// createServer method of the http module to create a new web server./
const app = createServer((request , response)=>{
    response.writeHead(200, {'Content-Type' : 'text/plain'})
    response.end('Hello world')
})
*/

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]

  /*
const app = http.createServer((request ,response)=>{

    // The application/json value in the Content-Type header informs the receiver that the data is in the JSON format.
    response.writeHead(200,{'Content-Type': 'application/json'})


    // The notes array gets transformed into JSON with the JSON.stringify(notes) method
    response.end(JSON.stringify(notes))
})

//bind the http server assigned to the app variable, to listen to HTTP requests sent to port 3001:
const PORT = 3001;
app.listen(PORT)
console.log(`Server running on port ${PORT}`);
*/

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())


app.get('/',(request,response)=>{
    response.send('<h1>Hello World</h1>')
})


app.get('/api/notes',(request,response)=>{
    response.json(notes);
})



// We can define parameters for routes in express by using the colon syntax:
app.get('/api/notes/:id',(request,response)=>{

  // Routing refers to how an application’s endpoints (URIs) respond to client requests. For an introduction to routing,
  // The id parameter in the route of a request can be accessed through the request object:
  const id = Number(request.params.id)
  console.log(id);


  const note = notes.find(note=>{
    
    //The cause of the bug becomes clear. The id variable contains a string '1', whereas the ids of notes are integers.
   console.log(note.id , typeof note.id , id , typeof id , note.id ===id)

   return note.id === id
  })
  console.log(note);

  response.json(note)
})


app.get('/api/notes/:id' ,(request,response)=>{
  const id = Number(request.params.id);
  const note = notes.find(note=>note.id===id)

  // If no note is found, the server should respond with the status code 404 not found instead of 200.

  //if-condition leverages the fact that all JavaScript objects are truthy
  //undefined is falsy
  if(note){
    response.json(note)
  }else{
    response.status(404).end()
  }

})


//Deleting resources
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

// Receiving data

//-->To access the data easily, we need the help of the express json-parser that is taken to use with command app.use(express.json()).

//-->The json-parser functions so that it takes the JSON data of a request, transforms it into a JavaScript object and then attaches it to the body property of the request
app.use(express.json())

app.use(requestLogger)

const generateId = ()=>{

  const maxId = notes.length >0 ? Math.max(...notes.map(n=>n.id)) : 0

  return maxId +1
}

app.post('/api/notes',(request,response)=>{
  const body = request.body

  if(!body.content){
    return response.status(400).json({
      error : 'Content missing'
    })
  }


  const note = {
    content : body.content,
    important : body.important || false,
    id : generateId(),
  }
  notes = notes.concat(note)

  console.log(notes);
  response.json(note)
})




const PORT = process.env.PORT || 3031
app.listen(PORT,()=>{
    console.log(`Server runnung on port ${PORT}`);
})




