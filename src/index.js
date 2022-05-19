import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.css';

import reducer from './reducers';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';

import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
