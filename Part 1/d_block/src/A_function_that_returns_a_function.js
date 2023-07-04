import { useState } from "react";


const App8 = () =>{
    const [value , setValue ] =useState(10)

    //FUNCTION RETURNING FUNCTION
    // const setToValue = (newValue) => () =>{
    //     console.log('Value now' ,newValue);
    //     setValue(newValue)
    // }

    const setToValue =(newValue)=>{
        console.log('Value now ' ,newValue);
        setValue(newValue)
    }
    return(
        <>
        <hr/>
        {value}
       {/* <button onClick={setToValue(1000)}>Thousand</button>
       <button onClick={setToValue(0)}>Reset</button>
       <button onClick={setToValue(value+1)}>increment</button> */}

        <button onClick={()=>setToValue(1000)}>Thousand</button>
       <button onClick={()=>setToValue(0)}>Reset</button>
       <button onClick={()=>setToValue(value+1)}>increment</button>
        </>
    )
}

const App7 =()=>{
    const [value , setValue] = useState(10)

    const hi = () =>{
        const handler = () => console.log('Hi👋')
        return handler
    }


    // const hello2 =(who) =>{
    //     const handler=()=>{
    //         console.log('hello',who);
    //     }
    //     return handler
    // }

    // const hello2 =(who) =>{
    //         return () =>{
    //             console.log('hello',who);

    //         }
    //     }

    const hello2 =(who)=> ()=>{console.log('hello' ,who)};


    return (
        <>
        <div>
            {value}
            <button onClick={hi()}>
               Hi
            </button>

            <button onClick={hello2("Rajneesh")}>
                Hello 
            </button>
            <button onClick={hello2("React")}>
                Hello 
            </button>
            <button onClick={hello2("function")}>
                Hello 
            </button>
        </div>
        </>
    )
}

export default App7;
export {App8}