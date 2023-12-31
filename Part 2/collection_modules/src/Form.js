import React from "react";
import { useState } from "react";
import Note from "./Componenets/Note";

// const App6 =(props)=>{
const App6 = () => {

  // console.log('form');
  // console.log(props);

  const [notes, setNotes] = useState([]);

  const [newNote, setNewNote] = useState('')

  // Filtering Displayed Elements
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject))
    setNewNote(' ')
  }


  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note=>note.important)



  return (
    <>
      <div>
        <h1>
          Forms : Notes
        </h1>

        <div>
          <button onClick={()=>setShowAll(!showAll)}>
            show{showAll ? 'important' : 'all'}
          </button>
        </div>
        <ul>
          {notesToShow.map(note => <Note key={note.id} note={note} />)}
        </ul>
      </div>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>

    </>
  )
}

export default App6