import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { CounterContextProvider } from './contexts/CounterContext';
import './index.css';
import { Abc } from './templates/Abc';
import App from './templates/App';
import { Home } from './templates/Home/index6';
import { Page404 } from './templates/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/abc/:slug?/:id?" component={Abc} />
          <Route path="/abc/:slug?" component={Abc} />
          <Route path="/abc/" component={Abc} />
          <Route path="/" component={App} exact />
          <Route path="*" component={Page404} />
        </Switch>
      </BrowserRouter>
    </CounterContextProvider>
  </React.StrictMode>,
);
