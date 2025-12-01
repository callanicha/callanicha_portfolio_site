import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import icon from './img/icon.jpeg';

// Set custom favicon from src/img/icon.jpeg
const favicon = document.getElementById('favicon');
if (favicon) {
  favicon.href = icon;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

