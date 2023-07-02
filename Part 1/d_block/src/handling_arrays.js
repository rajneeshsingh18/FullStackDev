import { useState } from "react";

const App3 =()=>{

    const [left , setLeft] =useState(0);
    const [right , setRight] =useState(0);

    // Every click is stored in a separate piece of state called allClicks that is initialized as an empty array:
    const [allClicks ,setAll] = useState([])
    
    const handleLeftClick = ()=>{
        setAll(allClicks.concat('L'))

        //not recommended
        // allClicks.push('L')
        // setAll(allClicks)

        setLeft(left+1);
    }

    const handleRightClick = () =>{
        setAll(allClicks.concat('R'))
        setRight(right+1);
    }

    return(
        <>

        <div>
        <h1>{left}</h1>
        <button onClick={handleLeftClick}>Left</button>
        <h1>{right}</h1>
        <button onClick={handleRightClick}>Right</button>
        <p>{allClicks.join(' ')}</p>
        </div>
        </>
    )
}


export default App3;