import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './Array_Indexes_as_KEYS';
import { App3 } from './Array_Indexes_as_KEYS';

import App4 from './exercises';

import App5 from './exercise_2_4_step9';

import App6 from './Form';

import Phonebook from './phonebook';

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App notes={notes}/>
    <App2 notes={notes}/>
    <App3 notes={notes}/>
    <App4/>

    <App5/>
    <App6 notes ={notes}/>
    <Phonebook/>

  </React.StrictMode>
);

