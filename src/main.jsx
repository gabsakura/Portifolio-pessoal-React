import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import './Style.css';  // Importe o arquivo CSS global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
