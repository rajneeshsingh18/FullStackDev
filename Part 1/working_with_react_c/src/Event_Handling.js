import { useState } from "react"


const App6 = () =>{
    const [value , setValue ] =useState(10)

    function resetToZero(){
        setValue(0);
    }
    return(
        <>
        <hr/>
        {value}
        <button onClick={()=>console.log('Clicked the button')}>Button</button>

        <button onClick={resetToZero}>Reset to Zero</button>
        {/* <button onClick={()=>setValue(0)}>Reset to Zero</button> */}
        </>
    )
}

// const Button = () =>{
//     const [counter , setCounter] = useState(0)

//     // const handleClick =() =>{
//     //     console.log("Button Clicked");
//     // }

//     return(
//         <>
//         <div>
//             {counter}
//         </div>
//         {/* 
//         <button onClick={() => console.log("Button clicked")} >
//             plus
//         </button> 
//         */}
//         <button onClick={() =>setCounter(counter+1)} >
//             plus
//         </button>
//         <button onClick={() =>setCounter(counter-1)} >
//             Minus
//         </button>
//         <button onClick={() =>setCounter(0)} >
//             Reset 
//         </button>

//         {/* What if we tried to define the event handlers in a simpler form? */}
//         {/* <button onClick={setCounter(0)} >
//             Reset 
//         </button> */}
//         </>
//     )
// }


// const Button = () =>{
//     const [counter , setCounter] = useState(0)

//     const incrementByOne = () => setCounter(counter+1)

//     const decrementByOne = () => setCounter(counter-1)

//     const resetToZero = () => setCounter(0)


//     return(
//         <>
//         {/*
//          <div>
//             <i>
//            <h2> <Display counter = {counter}/> </h2> 
//             </i>
//         </div>
    
//         <button onClick={incrementByOne} >
//             plus
//         </button>
//         <button onClick={decrementByOne} >
//             Minus
//         </button>
//         <button onClick={resetToZero} >
//             Reset 
//         </button>

//         <hr/>
//          */}

//         {/* 
//         -->Button component for the buttons of our application
//         -->pass the event handler as well as the title of the button through the component's props 
//         */}
//         <h2>Resusable button component </h2>
//         <h2> <Display counter = {counter}/> </h2> 

//         <Btn handleClick = {incrementByOne}
//                 text = "Plus" />

//         <Btn handleClick = {decrementByOne}
//         text = "Minus"/>

       
//         </>
//     )
// }

const Button = () =>{
    const [counter , setCounter] = useState(0)
    console.log('rendering with counter value', counter)

    const incrementByOne = () =>{
        console.log('Incresing, value before', counter)
        setCounter(counter+1)
    } 

    const decrementByOne = () => {
        console.log('decreasing, value before', counter)
        setCounter(counter-1)
    }

    const resetToZero = () => {
        console.log('resetting to zero, value before', counter)
        setCounter(0)
    }


    return(
        <>
    
        {/* 
        -->Button component for the buttons of our application
        -->pass the event handler as well as the title of the button through the component's props 
        */}
        <h2>Resusable button component </h2>
        <h2> <Display counter = {counter}/> </h2> 

        <Btn handleClick = {incrementByOne} text = "Plus" />

        <Btn handleClick = {decrementByOne} text = "Minus"/>

        <Btn handleClick = {resetToZero} text = "Reset"/>

       
        </>
    )
}

// Refactoring the components
const Display = ({counter}) => <> <div> {counter} </div> </>

const Btn =({handleClick , text})=><> <button onClick={handleClick}> {text}</button> </>



export default Button;
export {Display};
export {Btn}
export {App6}