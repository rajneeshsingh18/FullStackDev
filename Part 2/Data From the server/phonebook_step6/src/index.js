import React from 'react';
import ReactDOM from 'react-dom/client';
import Phonebook from './phonebook';
import './index.css'
import Country from './data_for_countries';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Phonebook/> */}
    <Country/>
  </React.StrictMode>
);
