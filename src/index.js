import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home/index';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Router } from 'react-router-dom';
import { browserHistory } from '@remix-run/router';
import routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
