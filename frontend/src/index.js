import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import reducers from './reducers';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style/index.css';
import 'mdbreact/dist/css/mdb.css';
import '../node_modules/toastr/build/toastr.min.css';

/*
----------------------
  Create Redux Store
----------------------
*/
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, createLogger)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
