import "@babel/polyfill";
import React from 'react';
import ReactDOM from "react-dom";
import App from './components/app';
import './index.scss';
import { createStore } from 'redux';
import allReducers from './reducer';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));