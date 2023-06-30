

//Component State , event handlers
function App() {

  const name = "Rajneesh";
  const age = 20;
  return (
    <>
    <div>
      <h1>
        Hello JS

        <Hello name = {"Kushhal"}
              age = {45}/>

      <Hello name = {name}
              age = {age}/>
        
      </h1>
    </div>
    </>
 
  );
}



/*
const Hello = (props) =>{
  return(
    <>
    <div>
      <p>
        Hello {props.name} , You are {props.age} years old
      </p>
    </div>
    </>
  )
}
*/

/*
const Hello = (props) =>{


//Component Helper function
  const bornYear = () =>{
    console.log(props);
    console.log(props.age);
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return(
    <>
    <div>
      <p>
        Hello {props.name} , You are {props.age} years old
      </p>

      <p>
        So You were probably born in {bornYear()}
      </p>
    </div>
    </>
  )
}
*/

/*
const Hello = (props) =>{

  // const name = props.name;
  // const age = props.age

  //Destructuring object variables
  const {age , name} =props;


  //Component Helper function
    const bornYear = () => new Date().getFullYear() - age;
    
  
    return(
      <>
      <div>
        <p>
          Hello {name} , You are {age} years old
        </p>
  
        <p>
          So You were probably born in {bornYear()}
        </p>
      </div>
      </>
    )
  }
  */

  // destructuring a step further
  const Hello = ( {age , name}) =>{

    // const name = props.name;
    // const age = props.age
  
    //Destructuring object variables
    // const {age , name}=props;
  
  
    //Component Helper function
      const bornYear = () => new Date().getFullYear() - age;
      
    
      return(
        <>
        <div>
          <p>
            Hello {name} , You are {age} years old
          </p>
    
          <p>
            So You were probably born in {bornYear()}
          </p>
        </div>
        </>
      )
    }
export default App;
export {Hello}