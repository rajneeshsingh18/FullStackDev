//conditional rendering 

import { useState } from "react";

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <>
                <div><h1>
                    the app is used by pressing the buttons
                </h1></div>
            </>
        )
    }
    return (
        <>
            <h1>
                button press history : {props.allClicks.join(' ')}
            </h1>
        </>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const App5 = () => {

    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAll] = useState([])



    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1);

    }
    return (
        <>

            <div>
                <hr />
                <h1>{left}</h1>
                <Button handleClick={handleLeftClick} text="left" />
                <Button handleClick={handleRightClick} text="right" />
                <h1>{right}</h1>

                <History allClicks={allClicks} />
            </div>
        </>
    )
}

/*
const App5 =()=>{

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
       <History allClicks={allClicks}/>
        </div>
        </>
    )
}
*/
export default App5;
export { History };
export { Button }