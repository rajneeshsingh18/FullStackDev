import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import Exchange_rate from './Exchange_rate';
import './index.css'

// import axios from 'axios'

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
  // <Exchange_rate/>
);

//fulfilled promise

/*
axios
.get('http://localhost:3031/notes')
.then(response =>{
  const notes = response.data;
  console.log(notes);
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App notes ={notes}/>
    </React.StrictMode>
  );

})
*
/
/*
const promise = axios.get('http://localhost:3031/notes')
console.log(promise);

promise.then(response=>{
  console.log(response);
})
*/
//rejected promise

// const promise2 = axios.get('http://loaclhost:3031/foobar')
// console.log(promise2);




