import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import App2 from './page_re_rendering';
// import App3  from './stateful_component';
import Counter  from './stateful_component';
import Button  from './Event_Handling';
import FlipCard from './flipkard';

import { App6 } from './Event_Handling';

// let counter=1;

//create a counter where the value increased as a function 

// const refresh =() =>{
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       {/* <App /> */}
//       <App2 counter = {counter}/>
//     </React.StrictMode>
//   )
// }


//fOR STATEFUL COMponent
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* <App3 /> */}
      <Counter />
      <Button />
      <FlipCard />
      <App6 />
    </React.StrictMode>
)




// refresh()
// counter += 1;
// refresh();
// counter += 1;
// refresh();

// setInterval(()=>{
//   refresh()
// counter += 1;
// },1000)