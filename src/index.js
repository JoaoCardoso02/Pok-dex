import React from 'react';
import ReactDOM from "react-dom";

import Routes from './routes.js';

import { GlobalStyle } from './styles';

import { Provider } from 'react-redux';
import store from './store/index.js';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>, document.getElementById("root")
);