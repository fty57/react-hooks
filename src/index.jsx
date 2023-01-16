import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './templates/App';
import { Home } from './templates/Home/index3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
