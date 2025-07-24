import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx'
import '../src/styles/style.css';
import { HashRouter } from 'react-router';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

if (module.hot) {
   console.log('is hot');
  module.hot.accept();
}