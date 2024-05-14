import React from 'react';
import ReactDOM from 'react-dom/client';
import { App , Acheivments }from './App';
import { CardStackDemo } from './card';
//import WaterDropGrid from './dots';
//import Test from './Test';
//import { MacbookScrollDemo } from './Macbook';
//import Core from './Core.jsx'
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <CardStackDemo />
    <Acheivments />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
