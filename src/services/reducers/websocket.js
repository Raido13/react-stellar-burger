import {
  WS_CONNECTION_SUCCESS_COMMON,
  WS_CONNECTION_ERROR_COMMON,
  WS_CONNECTION_CLOSED_COMMON,
  WS_CONNECTION_SUCCESS_PROFILE,
  WS_CONNECTION_ERROR_PROFILE,
  WS_CONNECTION_CLOSED_PROFILE,
  WS_GET_COMMON_ORDERS,
  WS_GET_PROFILE_ORDERS,
  WS_CLEAR_PROFILE_ORDERS
} from '../actions/websocket';

const initialState = {
  wsConnectProfile: false,
  wsConnectCommon: false,
  totalOrders: null,
  totalToday: null,
  profileOrders: [],
  commonOrders: []
}

export const websocketReducer = (state = initialState, action) => {
  switch(action.type) {
    case WS_CONNECTION_SUCCESS_COMMON: {
      return {...state, wsConnectCommon: true}
    }
    case WS_CONNECTION_ERROR_COMMON: {
      return {...state, wsConnectCommon: false}
    }
    case WS_CONNECTION_CLOSED_COMMON: {
      return {...state, wsConnectCommon: false, commonOrders: [], totalOrders: null, totalToday: null}
    }
    case WS_CONNECTION_SUCCESS_PROFILE: {
      return {...state, wsConnectProfile: true}
    }
    case WS_CONNECTION_ERROR_PROFILE: {
      return {...state, wsConnectProfile: false}
    }
    case WS_CONNECTION_CLOSED_PROFILE: {
      return {...state, wsConnectProfile: false, profileOrders: []}
    }
    case WS_GET_COMMON_ORDERS: {
      return {...state, commonOrders: action.payload.orders, totalOrders: action.payload.total, totalToday: action.payload.totalToday}
    }
    case WS_GET_PROFILE_ORDERS: {
      return {...state, profileOrders: action.payload.orders}
    }
    case WS_CLEAR_PROFILE_ORDERS: {
      return {...state, wsConnectProfile: false, profileOrders: []}
    }
    default: return state;
  }
}