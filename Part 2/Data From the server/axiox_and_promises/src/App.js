import { useState, useEffect } from 'react'


import noteService from './services/notes/notesService'

//Altering data in Server

// Changing the Importance of Notes
const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

  //initial version of the toggleImportanceOf event
  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    noteService
      .update(id, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response.data))
      })
  }

  useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        setNotes(response.data)
      })
  }, [])


  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    // Sending Data to the Server
    noteService
      .create(noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
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
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        <ul>
          {notesToShow.map(note =>
            <Note key={note.id}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)} />
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



/*
import axios from 'axios'

// Changing the Importance of Notes
const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)

  //initial version of the toggleImportanceOf event

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3031/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    axios.put(url, changedNote).then(response => {
      setNotes(notes.map(n => n.id !== id ? n : response.data))
    })

   
  }

  useEffect(() => {
    
    axios
      .get('http://localhost:3031/notes')
      .then(response => {
        setNotes(response.data)
      })
  }, [])

  console.log('render', notes.length, 'notes')

  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    // Sending Data to the Server

    axios
      .post(' http://localhost:3031/notes', noteObject)
      .then(response => {
        console.log(response);

        //update the state of the App component when we created the new note.
        setNotes(notes.concat(noteObject))
        setNewNote('')
      })
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
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        <ul>
          {notesToShow.map(note =>
            <Note key={note.id}
              note={note}
              toggleImportance = {() => toggleImportanceOf(note.id)} />
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

*/

export default App
export { Note }


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