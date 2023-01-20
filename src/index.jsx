import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { CounterContextProvider } from './contexts/CounterContext';
import './index.css';
import { Abc } from './templates/Abc';
import App from './templates/App';
import { Home } from './templates/Home/index6';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/abc/:slug?/:id?" component={Abc}></Route>
          <Route path="/" component={App}></Route>
        </Switch>
      </BrowserRouter>
    </CounterContextProvider>
  </React.StrictMode>,
);
