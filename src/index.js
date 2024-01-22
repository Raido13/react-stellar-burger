import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers/index";
import thunk from "redux-thunk";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from "react-dnd/dist/core";
import { BrowserRouter as Router } from "react-router-dom";
import { socketMiddleware } from "./services/middleware/socketMiddleware";
import {
  WS_CONNECTION_START_COMMON,
  WS_CONNECTION_CLOSE_COMMON,
  WS_CONNECTION_SUCCESS_COMMON,
  WS_CONNECTION_ERROR_COMMON,
  WS_CONNECTION_CLOSED_COMMON,
  WS_CONNECTION_START_PROFILE,
  WS_CONNECTION_CLOSE_PROFILE,
  WS_CONNECTION_SUCCESS_PROFILE,
  WS_CONNECTION_ERROR_PROFILE,
  WS_CONNECTION_CLOSED_PROFILE,
  WS_GET_COMMON_ORDERS,
  WS_GET_PROFILE_ORDERS,
} from './services/actions/websocket';

const wsActionsCommonOrders = {
  wsInit: WS_CONNECTION_START_COMMON,
  wsClose: WS_CONNECTION_CLOSE_COMMON,
  opOpen: WS_CONNECTION_SUCCESS_COMMON,
  onError: WS_CONNECTION_ERROR_COMMON,
  onClose: WS_CONNECTION_CLOSED_COMMON,
  onGetOrders: WS_GET_COMMON_ORDERS
}

const wsActionsProfileOrders = {
  wsInit: WS_CONNECTION_START_PROFILE,
  wsClose: WS_CONNECTION_CLOSE_PROFILE,
  opOpen: WS_CONNECTION_SUCCESS_PROFILE,
  onError: WS_CONNECTION_ERROR_PROFILE,
  onClose: WS_CONNECTION_CLOSED_PROFILE,
  onGetOrders: WS_GET_PROFILE_ORDERS
}

const composeEnchancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enchancer = composeEnchancers(applyMiddleware(thunk, socketMiddleware(wsActionsCommonOrders), socketMiddleware(wsActionsProfileOrders)));

const store = createStore(rootReducer, enchancer);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </DndProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
