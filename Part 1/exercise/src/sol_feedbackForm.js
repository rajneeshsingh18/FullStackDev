import React , {useState}from 'react';




const Btn =({handleClick , text})=><> <button onClick={handleClick}> {text}</button> </>

// const Statistics = ({text ,value}) =>{
//     const handleNeutral=()=>{setNeutralCount(neutral+1)}
    
//     const handleBad=()=> {setBadCount(bad+1)}

//     const handleBadDecrease =()=>{setBadCount(bad-1)}

//     const handleGood=()=> {setGoodCount(good+1)}
    
   
//     return(
//         <>
//         <div>
//             <Btn />
//         </div>
//         </>
//     ) 
// }


// Sloution -->1.8: unicafe step3 --> Refactor your application so that displaying the statistics is extracted into its own Statistics component

const Statistics = ({good , neutral , bad} )=>{
    const total = good + neutral + bad;
    const average = (good - bad) /total;
    const goodPercentage = (good/total)*100;

    return(
        
        <>
        <div>
        <h1>Statistics</h1>
        <p>Good    : {good} </p>
        <p>Neutral : {neutral} </p>
        <p>Bad   : {bad} </p>

        <h2>Total  : {total}</h2>


        <h2>The Average Feedback : {average}</h2>

        <h2>positive = {goodPercentage} %</h2> 
        </div>
        </>
    )
}

const Form = ()=>{

    const [good , setGoodCount] =useState(0);
    const [neutral , setNeutralCount] = useState(0);
    const [bad , setBadCount] =useState(0);


    const handleGood=()=> {setGoodCount(good+1)}
    
    const handleNeutral=()=>{setNeutralCount(neutral+1)}
    
    const handleBad=()=> {setBadCount(bad+1)}


  
    
    
    return (
        <>
        <hr/>
        <h1>Give Feedback</h1>
        
        <Btn handleClick={handleGood} text="Good"/>
        <Btn handleClick={handleNeutral} text="Neutral"/>
        <Btn handleClick={handleBad} text="Bad"/>
    
        <Statistics good ={good} neutral={neutral} bad={bad}/>

        
        </>
    )
}
/*
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
        <h1>Give Feedback</h1>
        
        <Btn handleClick={handleGood} text="Good"/>
        <Btn handleClick={handleNeutral} text="Neutral"/>
        <Btn handleClick={handleBad} text="Bad"/>




        <h1>Statistics</h1>
        <p>Good    : {good} </p>
        <p>Neutral : {neutral} </p>
        <p>Bad   : {bad} </p>



        <h2>Total number of Feedback : {good+neutral+bad}</h2>


        <h2>The Average Feedback : {(good-bad)/total} </h2>

        <h2>positive = {good/total*100} %</h2> 
        
        </>
    )
}
*/
export default Form;

// export default App;
export {Btn};
export {Statistics}