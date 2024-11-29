import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importă fișierul CSS global, dacă îl folosești
import App from './components/App'; // Importă componenta principală

// Montarea aplicației în elementul cu id-ul 'root'
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Aici este aplicația ta principală */}
  </React.StrictMode>,
  document.getElementById('root') // Aici se montează aplicația în div-ul cu id-ul 'root'
);
