console.log("Hello world");

// imports Node's built-in web server module
// import { createServer } from 'http';
const http = require('http')

/*
//createServer method of the http module to create a new web server.
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