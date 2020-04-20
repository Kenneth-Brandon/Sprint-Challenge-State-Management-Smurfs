import React from 'react';
import ReactDOM from 'react-dom';
// State
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { smurfReducers } from './store/smurfReducers';
// Middleware
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
// Components
import './index.css';
import App from './components/App';

const store = createStore(smurfReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
