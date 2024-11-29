import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Dacă folosești un fișier CSS global
import App from './components/App'; // Importă componenta App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Aici se montează aplicația în div-ul cu id-ul 'root'
);
