
/*
State : A components memory

-->In React, useState, as well as any other function starting with ”use”, is called a Hook.
 
The useState Hook provides those two things:

-->A state variable to retain the data between renders.
-->A state setter function to update the variable and trigger React to render the component again.
*/



import { sculptureList } from './data.js';

//Adding a state variable

import {useState} from 'react';


export default function Gallery() {
    // index is a state variable and setIndex is the setter function.

    
    const [index , setIndex] =useState(0); //--> The [ and ] syntax here is called array destructuring and it lets you read values from an array. The array returned by useState always has exactly two items.


    //setting two or more state component
    const [showMore ,setShowMore] = useState(false);
  
    function handleNextClick() {
      setIndex(index+1);
    }

    function handleMoreClick(){
        setShowMore(!showMore)
    }
  
    let sculpture = sculptureList[index];
    return (
      <>
      <b><hr/></b>
        <button onClick={handleNextClick}>
          Next
        </button>
        <h2>
          <i>{sculpture.name} </i> 
          by {sculpture.artist}
        </h2>
        <h3>  
          ({index + 1} of {sculptureList.length})
        </h3>

        <button onClick={handleMoreClick }>

            {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
        <img 
          src={sculpture.url} 
          alt={sculpture.alt}
        />
        
      </>
    );
  }
/*
//When a regular variable isn’t enough 

export default function Gallery() {
  let index = 0;

  function handleClick() {
    index = index + 1;
  }

  let sculpture = sculptureList[index];
  return (
    <>
    <b><hr/></b>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
*/