
const App = () => {

  
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3= `State of a component`
  const exercises3 = 14



  return (

    <>

      {/* <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    
       
      <p> Number of exrercise {exercises1 + exercises2 + exercises3}</p>
     
    </div> */}



       
    <div>
      <Header course = {course}/>
      <Content part1 = {part1} 
      part2 = {part2}
      part3 = {part3}
      exercises1 = {exercises1} 
      exercises2 = {exercises2}
      exercises3 = {exercises3} 
      />
     
      <Total exercises1 = {exercises1} 
              exercises2 = {exercises2}
              exercises3 = {exercises3} 
      />
    </div>
    
    </>
  )
}

const Total = (props) =>{
  console.log(props);
  return(
    <>
    <p>
    Number of exrercise {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
    </>
  )
}


const Content = (props) =>{
  console.log(props);
  return(
      <>
      <p>
          {props.part1} {props.exercises1}
      </p>
      <p>
          {props.part2} {props.exercises2}
      </p>
      <p>
          {props.part3} {props.exercises3}
      </p>
      </>
  )
}

const Header = (props) => {
  console.log(props); //return object that contain course
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
}
export default App;
export { Total }
export { Header }
export { Content }
