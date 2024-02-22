import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from "./reducers/index";
import { socketMiddleware } from "./middleware/socketMiddleware";
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
} from './actions/websocket';

const wsActionsCommonOrders = {
  wsInit: WS_CONNECTION_START_COMMON,
  wsClose: WS_CONNECTION_CLOSE_COMMON,
  onOpen: WS_CONNECTION_SUCCESS_COMMON,
  onError: WS_CONNECTION_ERROR_COMMON,
  onClose: WS_CONNECTION_CLOSED_COMMON,
  onGetOrders: WS_GET_COMMON_ORDERS
}

const wsActionsProfileOrders = {
  wsInit: WS_CONNECTION_START_PROFILE,
  wsClose: WS_CONNECTION_CLOSE_PROFILE,
  onOpen: WS_CONNECTION_SUCCESS_PROFILE,
  onError: WS_CONNECTION_ERROR_PROFILE,
  onClose: WS_CONNECTION_CLOSED_PROFILE,
  onGetOrders: WS_GET_PROFILE_ORDERS
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enchancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActionsCommonOrders), socketMiddleware(wsActionsProfileOrders)));

export const store = createStore(rootReducer, enchancer);