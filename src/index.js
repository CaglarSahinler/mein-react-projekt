import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Cat from './Cat';
import Gallery from './Gallery';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Gallery />
  </React.StrictMode>
);