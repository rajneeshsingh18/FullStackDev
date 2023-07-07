import React, { useState } from "react";

const Button = ({handleClick , text})=>{
    return(
        <>
        <button onClick={handleClick}>{text}</button>
        </>
    )
}

const StatisticsLine =({text , value})=>{
    console.log(text,value);
    
    return(
        <>
        {/* Unicafe step 6 : 1.11 Solution Not Done */}
        <tr> 
            <td>{text}</td>
            <td >{value}</td>
        </tr>
       

        {/* <p>
            {text}: {value} 
        </p> */}
        </>
    )
}

const Statistics = ({good ,neutral , bad}) =>{

    const total = (good+neutral+bad)
    const average = (good-bad)/total;

    if((good+neutral+bad === 0)){
        return (
            <p>
                No feedback given
            </p>
        )
    }
    return(
        <>
        <h2>Statistics</h2>
        <StatisticsLine text = "Good" value={good}/>
        <StatisticsLine text = "Neutral" value={neutral}/>
        <StatisticsLine text = "Bad" value={bad}/>

        <h3>
            Total : {total}
        </h3>
        <h3>
            Average : {average}
        </h3>
        <h3>
            positive : {(good/total)*100} %
        </h3>
        
        </>
    )
}


const Form3 =()=>{
    const [good , setGood] =useState(0);
    const [neutral , setNeutral] = useState(0);
    const [bad , setBad] = useState(0);
   
    const handleGood=()=>setGood(good+1);
    const handleNeutral=()=>setNeutral(neutral+1);
    const handleBad=()=>setBad(bad+1);

    return(
        <>
        
        <h1>Solution for 1.10 : unicafe step 5</h1>
        
        <h2>  Give FeedBack</h2>
        <Button handleClick={handleGood} text={'Good'}/>
        <Button handleClick={handleNeutral} text={'Neutral'}/>
        <Button handleClick={handleBad} text={'Bad'}/>
        

        <Statistics good={good} neutral ={neutral} bad={bad}/>

        </>
    )
}

export default Form3;
export {Statistics};
export {Button}
export {StatisticsLine}
