import React from "react";
import Course from "./Componenets/Course"



const App4 = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        }
        ,
        // the application still works if we add or remove parts of a course
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Js setTimeout and Date',
          exercises: 23,
          id: 4
        }
      ]
    }
  
    return <Course course={course} />
  }

export default App4


  