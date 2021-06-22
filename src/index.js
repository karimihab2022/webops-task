import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { requestphotos, searchRobots } from './reduser'

const logger = createLogger() ;

const rootReducers = combineReducers({requestphotos, searchRobots})

const store = createStore(rootReducers, applyMiddleware(thunk, logger))
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
           <App />
        </Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
