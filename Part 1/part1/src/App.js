
// component Hello uses two props:
const Hello =({person , age})=>{

  return (

    <>
    <div>
        <h2> Hi I'm {person.name} currently my age is {age}</h2>
    </div>

    
    <div>
      <p>
        Hello React

        <br></br>
        {/* <Avatar/> */}
      </p>
    </div>

    </>
  )
}

const Hello_2 = (props) => {
    return(
      <>
      <h2>
        Hi {props.name}
      </h2>

      <h2>
        Hi {props.name} , you are {props.age} years old
      </h2>
      
      </>
    )
}


const Footer = ()=>{
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}
// Component App as javascript arrow function
const App = () => {
  
  const now = new Date();
  const a = 10 ;
  const b = 20;
  console.log(now , a+b);
  const name = "default name";
  const age = " random age";

  const friends = [
    {name : "Peter" , age :4},
    {name : " Maya" , age :10},
  ]

  const friends_2 = ['Raju' ,'Om'];

  return (

    <>

{/* Do not render objects : Error -->Objects are not valid as a React child */}

    <div>
      {/* 
      <p>
        {friends[0]}
      </p>
      <p>
        {friends[1]}
      </p>
       */}

      <p>
        {friends[0].name} {friends[0].age}
      </p>
      <p>
        {friends[1].name} {friends[1].age}
      </p>

      {/* React also allows arrays to be rendered */}
      <p>
        {friends_2}
      </p>
    </div>

    <div>

      <h1>  
        Introduction to React 
      </h1>

      {/* Using other Hello component */}
      <h1><Hello 
      person={{name : "Yashwant" }}
      age ="21"
      /></h1>
      <Hello 
      person = {{name : "Rajneesh" }}

      age ={20+30}
      />

      <Hello 
       person={{name : "Kushhal" }}
       age ="20" />

      <Hello 
       person={{name : "Ankur" }}
       age ="22"/>

      <p>
        Hello Developers 
      </p>

      <p>
        Current <b>time and Date</b> is {now.toString()}
      </p>
      <p>
        {a} plus {b} is {a+b}
      </p>
    </div>
  
  <div>
    <h1>Greeting</h1>
    <Hello_2 name = "Rambo "/>
    <Hello_2 name = "Jack Rayan"/>
    <Hello_2
       name ={name}
       age = {2} />
       <Hello_2
       name ={name}
       age = {age} />
  </div>

  <Footer/>

  </>
  )
}



//Passing  Props to a componenet

/*
const Avatar = ()=> {
  return (
    <img
    className="avatar"
    src = "https://picsum.photos/id/237/200/300"
    alt = "Not found"
    width={200}
    height={300}
    />
  )
}
*/

// You can give Avatar some props in two steps.

// Step 2: Read props inside the child component
/* 
const Avatar = ({person , size})=> {
  return (
    <img
    className="avatar"
    src = "https://picsum.photos/id/237/200/300"
    alt = {person.name}
    width={size}
    height={size}
    />
  )
}

*/


export default App
export {Hello}
export {Hello_2}
export {Footer}


// export {Avatar}

/*
export function profilePic(){
  return (
    <Avatar />
  )  
}
*/

// --> Step 1: Pass props to the child component 

/*
export default function profilePic(){
  return (

    <div>
       <Avatar
    //person (an object)
    person = {{name : 'Unknown' , imageId : '23323'}}

    // size (a number):
    size = {250}
    />

<Avatar
    //person (an object)
    person = {{name : 'rambo' , imageId : '235f3'}}

    // size (a number):
    size = {300}
    />

<Avatar
    //person (an object)
    person = {{name : 'ra4234o' , imageId : '2141f3'}}

    // size (a number):
    size = {400}
    />
    
    </div>
  )  
}
*/