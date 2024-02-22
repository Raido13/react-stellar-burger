import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { socketMiddleware } from "./services/middleware/socketMiddleware";
import { rootReducer } from "./services/reducers/index";
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
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from "react-dnd/dist/core";
import "./index.css";
import App from "./components/app/app";

const createWSActions = (start, close, success, error, closed, getOrders) => {
  return {wsInit: start, wsClose: close, onOpen: success, onError: error, onClose: closed, onGetOrders: getOrders}
}

const wsActionsCommonOrders = createWSActions(
  WS_CONNECTION_START_COMMON,
  WS_CONNECTION_CLOSE_COMMON,
  WS_CONNECTION_SUCCESS_COMMON,
  WS_CONNECTION_ERROR_COMMON,
  WS_CONNECTION_CLOSED_COMMON,
  WS_GET_COMMON_ORDERS
);

const wsActionsProfileOrders = createWSActions(
  WS_CONNECTION_START_PROFILE,
  WS_CONNECTION_CLOSE_PROFILE,
  WS_CONNECTION_SUCCESS_PROFILE,
  WS_CONNECTION_ERROR_PROFILE,
  WS_CONNECTION_CLOSED_PROFILE,
  WS_GET_PROFILE_ORDERS
)

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
