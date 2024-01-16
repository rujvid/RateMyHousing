import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18
import App from './App'; // Correct import path
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
