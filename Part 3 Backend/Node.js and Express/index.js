require("dotenv").config();
// Importing the module
const Note = require("./models/note");


// Import necessary modules
console.log("Hello world");
const express = require("express");
const app = express();
const cors = require("cors");
const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};



// Middleware for enabling Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware for parsing incoming JSON data
app.use(express.static('build'))
app.use(express.json());



// Route for the homepage
app.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>");
});

// Route to get all notes
app.get("/api/notes", (request, response) => {
  Note.find({}).then((notes) => {
    response.json(notes);
  });
});

// Route to get a specific note by ID
app.get("/api/notes/:id", (request, response ,next) => {
  const id = request.params.id;
  Note.findById(id)
    .then((note) => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(TypeError));
});


// Route to delete a note by ID
app.delete("/api/notes/:id", (request, response,next) => {
  const id = request.params.id;
  Note.findByIdAndRemove(id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

// Route to create a new note
app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (body.content === undefined) {
    return response.status(400).json({ error: "content missing" });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  });

  note.save().then((savedNote) => {
    response.json(savedNote);
  });
});

// The toggling of the importance of a note 
app.put('/api/notes/:id' ,(request ,response,next)=>{
  const body = request.body;

  const note ={
    content : body.content,
    important : body.important,
  }

  Note.findByIdAndUpdate(request.params.id , note , {new : true})
  .then(updateNote =>{
    response.json(updateNote)
  })
  .catch(error=>next(error))

})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)

// Define the server port
const PORT = process.env.PORT || 3031;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

