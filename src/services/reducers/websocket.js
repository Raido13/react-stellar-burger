import {
  WS_CONNECTION_SUCCESS_COMMON,
  WS_CONNECTION_ERROR_COMMON,
  WS_CONNECTION_CLOSED_COMMON,
  WS_CONNECTION_SUCCESS_PROFILE,
  WS_CONNECTION_ERROR_PROFILE,
  WS_CONNECTION_CLOSED_PROFILE,
  WS_GET_COMMON_ORDERS,
  WS_GET_PROFILE_ORDERS,
  FIND_ORDER,
  FIND_ORDER_CLEAR
} from '../actions/websocket';

const initialState = {
  wsConnectProfile: false,
  wsConnectCommon: false,
  totalOrders: null,
  totalToday: null,
  profileOrders: [],
  commonOrders: [],
  foundOrder: null,
  findOrder: false
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
    case FIND_ORDER: {
      return {...state, findOrder: true, foundOrder: state.commonOrders.some(({number}) => number === +action.number) ? state.commonOrders.find(({number}) => number === +action.number) : null}
    }
    case FIND_ORDER_CLEAR: {
      return {...state, findOrder: false}
    }
    default: return state;
  }
}