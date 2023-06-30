import { useState } from "react"

const Button = () =>{
    const [counter , setCounter] = useState(0)

    // const handleClick =() =>{
    //     console.log("Button Clicked");
    // }

    return(
        <>
        <div>
            {counter}
        </div>
        {/* 
        <button onClick={() => console.log("Button clicked")} >
            plus
        </button> 
        */}
        <button onClick={() =>setCounter(counter+1)} >
            plus
        </button>
        <button onClick={() =>setCounter(counter-1)} >
            Minus
        </button>
        <button onClick={() =>setCounter(0)} >
            Reset 
        </button>
        </>
    )
}

export default Button;