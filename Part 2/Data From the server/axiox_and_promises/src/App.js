import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from "./Componenets/Note"



const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3031/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div> 
      <ul>
        <ul>
          {notesToShow.map(note => 
            <Note key={note.id} note={note} />
          )}
        </ul>
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App


/*
import React, { useEffect, useState } from "react";
import axios from 'axios'
import Note from "./Componenets/Note"

function App() {

  const [notes , setNotes] = useState([])
  const [newNote ,setNewNote] = useState(' ')
  const [showAll , setShowAll] = useState(true)


  useEffect(()=>{
      console.log('Effect');

      const eventHandler = response =>{
        console.log('promise fulfilled');
        setNotes(response.data)
      }
      const promise = axios.get('http://localhost:3031/notes')
      promise.then(eventHandler)
  },[])

  
  return (

    <>
    <div >
      <h1>Notes: </h1>
    {notes.map( note => <li key={note.id}>   {note.content}  </li>)}
  
    </div>
    </>
    
  );
}

export default App;
*/