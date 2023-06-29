'use strict';

/*

// 1.3: course information step3
const App =()=>{

    const course = 'Half Stack application development';
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }

    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
      }

    const part3 = {
        name: 'State of a component',
        exercises: 14
      }

    return(
        <>

        <div>
        <Header course = {course}/>

        <Content part1 ={part1}
                part2 ={part2}
                part3 ={part3}
        />

        <Total part1_exercise ={part1.exercises}
                part2_exercise ={part2.exercises}
                part3_exercise ={part3.exercises}/>
        </div>
        </>
       


    )
}


const Header = (props)=>{
    console.log(props);
    return(
        <>
        <h1>
            {props.course}
        </h1>
        </>
    )
}

const Content = (props) =>{
    console.log(props);
    return(
        <>
        <div>
            <p>
                {props.part1.name} {props.part1.exercises}
            </p>
            <p>
                {props.part2.name} {props.part2.exercises}
            </p>
            <p>
                {props.part3.name} {props.part3.exercises}
            </p>
        </div>
        </>
    )
}

const Total = (props) =>{
    console.log(props);
   return(
    <>
    <p> Number of Exercises : {props.part1_exercise + props.part2_exercise + props.part3_exercise}</p>
    </>
   ) 
}

*/

//1.4: course information step4 -->the objects into an array


const App = () =>{
    const course = 'Half Stack Application Development'
    const parts = [
        { name : 'Fundamentals of React', exercises: 10 },
        { name : 'Using props to pass data', exercises: 7 },
        { name : 'State of a component', exercises: 14 }
            ]
      
    return(

        

      
        <>
        <div>
        <Header course = {course}/>

        <Content parts = {parts} />

        <Total parts = {parts} />

        </div>
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

const Content = (props) =>{
    console.log(props);
    return(
        <>
        <p>
            {props.parts[0].name} {props.parts[0].exercises}
        </p>
        <p>
            {props.parts[1].name} {props.parts[1].exercises}
        </p>
        <p>
            {props.parts[2].name} {props.parts[2].exercises}
        </p>
        </>
    )
}

const Total = (props)=>{
    console.log(props);
    return(
        <>
        <p>
            Number of exercises : {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
        </p>
        </>
    )
}
export default App;
export {Header}
export {Content}
export {Total}
