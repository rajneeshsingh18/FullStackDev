const Content = ({courses}) =>{

    console.log(courses['parts']);
    console.log('Holla');
      return(
        <>
    
        {courses['parts'].map( data => <p key={data.id}>   {data.name}  {data.exercises}</p>)}
  
  
         <p>Using .reduce() methods apply on arrays Only</p>
        <h3>total of {courses['parts'].reduce((acc,val)=> acc + val.exercises,0)} exercises</h3>
       
        
        </>
      )
  }
  
  const Header = ({course}) => {
    return(
      <>
      <h2>{course.name}</h2>
      <Content courses={course}/>
      </>
    )
  }
  
  const Course =({course})=>{
      console.log(course);
      return(
          <>
             <h1>Exercise 2.1</h1>
             <Header course={course}/>
          </>
      )
  }

export default Course;
export {Content}