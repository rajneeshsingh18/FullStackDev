import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App2 from './complex_state';
import App3 from './handling_arrays';
import reportWebVitals from './reportWebVitals';

import App4 from './state_is_asynchronous';
import Gallery from './adding_interactivity';

import App5 from './conditional_rendering';
import App7 ,{App8}from './A_function_that_returns_a_function';

import App9 from './Passing_event_handlers_to_child_components';
// import App8  from './A_function_that_returns_a_function';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App2/>

    <App3 />
    <App4 />
    <App5 />
    <Gallery/>
    <App7/>
    <App8/>
    <App9/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
