import React from 'react';
import ReactDOM from 'react-dom/client';
import Phonebook from './phonebook';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Phonebook/>
  </React.StrictMode>
);
