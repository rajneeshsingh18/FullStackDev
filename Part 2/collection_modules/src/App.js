import React from "react";
import Note from './Componenets/Note';


function App({notes}) {

  console.log(notes);
  console.log(notes[0]);
  console.log(notes[0].content);

  //map always creates a new array 
  //-->note object as a parameter
  console.log(notes.map(note=>note.id));

  //Using .map() method on array
  //-->The elements generated by the map method, must each have a unique key value: an attribute called key.

  //Rendering Collections
  const contents = notes.map(note => note.content);
  console.log(contents);

  return (
    <>
    <div>
      <h1>
        Notes
      </h1>
      <ul>

        {/* 
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li> 
        */}

       {notes.map( note => <li key={note.id}>   {note.content}  </li>)}
        
        {/* <h2>Using  Note Componenet IN Note.js</h2>
        {notes.map(note =>{
          <Note key={note.id} note={note}/>
        })} */}
      </ul>
    </div>
    </>
  );
}

export default App;
