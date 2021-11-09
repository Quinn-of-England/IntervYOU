import React from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import App from "./App";
import reducers from "./reducers/index";
import { IP, CLIENT_PORT  } from './utils/types.js'; 

const url = `${IP}:${CLIENT_PORT }/post`;

// Store Consists of Reducers and Thunk Middleware
// Wrap Application with Provider, Giving Access to Store to All Components in App
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
