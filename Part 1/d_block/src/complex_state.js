//Complex State

import { useState } from "react"


const App2 =()=>{

    // We could implement the same functionality by saving the click count of both the left and right buttons into a single object:

    const [clicks , setClicks] = useState({
        left :0 ,right :0
    })


    const handleLeftClick = () => setClicks({...clicks ,left: clicks.left+1})

    const handleRightClick =()=>setClicks({...clicks , right :clicks.right+1})
    

    return(
        <>

        <div>
        <h1>{clicks.left}</h1>
        <button onClick={handleLeftClick}>Left</button>
        <h1>{clicks.right}</h1>
        <button onClick={handleRightClick}>Right</button>
        </div>
        </>
    )
}

/*
const App2 =()=>{

    // We could implement the same functionality by saving the click count of both the left and right buttons into a single object:

    const [clicks , setClicks] = useState({
        left :0 ,right :0
    })


    const handleLeftClick = () =>{
        const newClicks = {
            ...clicks,
            left : clicks.left +1,
            // right : clicks.right

        }

        setClicks(newClicks)
    }

    const handleRightClick =()=>{

        const newClicks ={
            // left : clicks.left ,
            ...clicks,
            right : clicks.right+1
        }
        setClicks(newClicks)
    }

    return(
        <>

        <div>
        <h1>{clicks.left}</h1>
        <button onClick={handleLeftClick}>Left</button>
        <h1>{clicks.right}</h1>
        <button onClick={handleRightClick}>Right</button>
        </div>
        </>
    )
}
*/

/*
const App2 =()=>{

    const [left , setLeft] =useState(0);
    const [right , setRight] =useState(0);

    

    return(
        <>

        <div>
        <h1>{left}</h1>
        <button onClick={()=>setLeft(left+1)}>Left</button>
        <h1>{right}</h1>
        <button onClick={()=>setRight(right+1)}>Right</button>
        </div>
        </>
    )
}
*/

export default App2;