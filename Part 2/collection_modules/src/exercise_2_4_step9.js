const Content = ({courses}) =>{

    // console.log(courses[0]);
    // console.log(courses[1]['parts']);

      return(
        <>
    
        
        {courses[0]['parts'].map( part => <p key={part.id}>   {part.name}  {part.exercises}</p>)}
  
  
         
        <h3>total of {courses[0]['parts'].reduce((acc,val)=> acc + val.exercises,0)} exercises</h3>
       
      <h2>{courses[1].name}</h2>

       {courses[1]['parts'].map(part => <p key={part.id}>  {part.name} {part.exercises}</p>)}

      
       <h3>total of {courses[1]['parts'].reduce((acc,val)=> acc +val.exercises,0)} exercises</h3>
        
        </>
      )
  }
  
  const Header = ({course}) => {
    return(
      <>
      <h1>Web development Curriculum</h1>
      <h2>{course[0].name}</h2>
     

      <Content courses={course}/>
      </>
    )
  }
  
  const Course =({course})=>{

      return(
          <>
             <h1>Exercise 2.5</h1>
             <Header course={course}/>
          </>
      )
  }




const App5 = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
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
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
  
    return (
      <div>
       <Course course={courses}/>
      </div>
    )
  }

export default App5;
export  {Course};
export {Content}