import React, { useState } from "react";


const Statistics = ({good ,neutral , bad}) =>{
    const total = (bad+neutral+good);
    const average = ((good-bad)/total)


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
        <p>
            Good : {good}
        </p>
        <p>
            Neutral : {neutral}
        </p>
        <p>
            Bad : {bad}
        </p>

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


const Form2 =()=>{
    const [good , setGood] =useState(0);
    const [neutral , setNeutral] = useState(0);
    const [bad , setBad] = useState(0);
   

    return(
        <>
        
        <h1>Solution for 1.8 : unicafe step 3 and 1.9: unicafe step4 </h1>
        
        <h2>  Give FeedBack</h2>
        <button onClick={()=>setGood(good+1)}>Good</button>
        <button onClick={()=>setNeutral(neutral+1)}>Neutral</button>
        <button onClick={()=>setBad(bad+1)}>Bad</button>

        <Statistics good={good} neutral ={neutral} bad={bad}/>

        </>
    )
}

export default Form2;
export {Statistics};
