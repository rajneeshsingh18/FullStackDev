import React from "react";
import Note from './Componenets/Note';

// Refactoring Modules --> {notes}

// const Note =({note})=>{
//     // console.log(note);
//     return(
//         <li>
//             {note.content}
//         </li>
//     )
// }

const App3 = ({notes})=>{
  return (
    <>
    <h1>
      Notes in App3 Variable
    </h1>
    <ul>
      {notes.map(note =>
        <Note key= {note.id} note={note}/>
        )}
    </ul>
    </>
  )
}


function App2({notes}) {

  return (
    <>
    <div>
      <h3>
        Notes : Simple method
      </h3>
      <ul>

        
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li> 
       </ul>

       <h3>
        Notes : Using map method with key attribute assigned
      </h3>
      <ul>
       {notes.map( note => <li key={note.id}>   {note.content}  </li>)}
       </ul>

       <h3>
        Notes : Using map method = Anti-pattern: Array Indexes as Keys
      </h3>
      <ul>
       {notes.map( (note,i) => <li key={i}>   {note.content}  </li>)}
    
       </ul>

       <h3>
        Notes : Using map method = Anti-pattern: Array Indexes as Keys
      </h3>
      <ul>
       {notes.map( (note,i) => <li key={i}>   {note.content}  </li>)}
    
       </ul>

       <h3>
        Notes : Using map method and Refactoirng displaying a single note into its own component Note
      </h3>
        <ul>
        {notes.map( note => <Note key = {note.id} note={note}/>)}
      </ul>
    </div>
    </>
  );
}

export default App2;
export {App3};