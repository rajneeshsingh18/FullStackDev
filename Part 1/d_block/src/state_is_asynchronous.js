// Update of the state is asynchronous
import { useState } from "react";

const App4 =()=>{

    const [left , setLeft] =useState(0);
    const [right , setRight] =useState(0);

    // Every click is stored in a separate piece of state called allClicks that is initialized as an empty array:
    const [allClicks ,setAll] = useState([])


    const [total , setTotal] =useState()

    const handleLeftClick = ()=>{
        setAll(allClicks.concat('L'))
        console.log('Left before ',left);
        const updateLeft = left +1
        setLeft(updateLeft);
        console.log('Left after ',updateLeft);

        setTotal(updateLeft+right)
    }

    const handleRightClick = () =>{
        setAll(allClicks.concat('R'))
        console.log('Right after ',right);
        const updateRight = right +1
        setRight(updateRight);
        console.log('Right after ',updateRight);

        setTotal(left+updateRight)
    }

    return(
        <>

        <div>
            <hr/>
        <h1>{left}</h1>
        <button onClick={handleLeftClick}>Left</button>
        <h1>{right}</h1>
        <button onClick={handleRightClick}>Right</button>
        <p>{allClicks.join(' ')}</p>
        <h1><p>Total : {total}</p></h1>
        </div>
        </>
    )
}


export default App4;