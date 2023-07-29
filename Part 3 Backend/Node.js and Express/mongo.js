const mongoose = require('mongoose');

if(process.argv.length < 3){
    console.log('give a password as arugumnet');
    process.exit(1);
}

const password = process.argv[2];


// establishing the connection to the database
const url =`mongodb+srv://rajneeshsinghdev6453:${password}@cluster0.bq82q6x.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)


// define the schema for a note
const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
  })

const Note = mongoose.model('Note' ,noteSchema)

// Creating  objects
const note = new Note({
    content : "Ne test file",
    important :true,
})



//Saving the object to the database 
note.save().then(result=>{
    // console.log(result);
    console.log('note saved!');
})

// Fetching objects from the database
Note.find({}).then(result=>{
    result.forEach(
        note=>{
            console.log(note);
        }
    )
    mongoose.connection.close()
})