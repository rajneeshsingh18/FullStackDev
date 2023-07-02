import React , { useState} from 'react';

/*
const App3 = () =>{
  const [ counter , setCounter] = useState(0) //0 is inital value of counter that is equal --> counter variable used in destructuring

//   console.log(counter);

  setTimeout(
    () => setCounter(counter+1)
          ,1000
  )

    

  console.log(`Rendering...  ${counter}`);

  return(
    <>
    <div>
      <h1>{counter}</h1>
    </div>
    </>
  )
}

*/

function Counter(){

    const [count , setCount] = useState(0);
    // The 'count' variable holds the current value of the state, and 'setCount' is a function that allows us to update the state value.

    const increment = () => {
        setCount(count+1);

    }

    const decrement = () => {
        setCount(count-1);
        
    }
    return(
        <>
        <div>
            <h2>
              <Display counter = {count} />
            </h2>
            <p>
                Count : {count}
            </p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </div>
        </>
    )
}


const Display = (props) =>{
    return(
      <>
      <div>
        {props.counter}
      </div>
      </>
    )
  }

// export default App3;
export default Counter;

export {Display};