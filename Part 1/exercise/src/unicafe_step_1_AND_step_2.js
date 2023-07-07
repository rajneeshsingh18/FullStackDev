import React , {useState}from 'react';




const Btn =({handleClick , text})=><> <button onClick={handleClick}> {text}</button> </>



//Solution for 1.6: unicafe step1 , 1.7: unicafe step2
const Form = ()=>{

    const [good , setGoodCount] =useState(0);
    const [neutral , setNeutralCount] = useState(0);
    const [bad , setBadCount] =useState(0);
    const total = good + neutral + bad ;


    const handleGood=()=> {setGoodCount(good+1)}
    
    const handleNeutral=()=>{setNeutralCount(neutral+1)}
    
    const handleBad=()=> {setBadCount(bad+1)}

    // const handleBadDecrease =()=>{setBadCount(bad-1)}
    
    
    return (
        <>
        <hr/>

        <h1>Solution for 1.6: unicafe step1 and 1.7: unicafe step2 </h1>
        <h2>Give Feedback</h2>
        
        <Btn handleClick={handleGood} text="Good"/>
        <Btn handleClick={handleNeutral} text="Neutral"/>
        <Btn handleClick={handleBad} text="Bad"/>




        <h2>Statistics</h2>
        <p>Good    : {good} </p>
        <p>Neutral : {neutral} </p>
        <p>Bad   : {bad} </p>



        <h3>Total number of Feedback : {good+neutral+bad}</h3>


        <h3>The Average Feedback : {(good-bad)/total} </h3>

        <h3>positive = {good/total*100} %</h3> 
        
        </>
    )
}

export default Form;
export {Btn};