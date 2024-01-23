import {
  REQUEST_ORDER_NUMBER,
  REQUEST_ORDER_NUMBER_SUCCESS,
  REQUEST_ORDER_NUMBER_FAILED,
  REQUEST_ORDER_INFO,
  REQUEST_ORDER_INFO_SUCCESS,
  REQUEST_ORDER_INFO_FAILED
} from '../actions/order-details';

const initialState = {
  orderNumberRequest: false,
  orderNumberError: false,
  orderNumber: null,
  orders: [],
  orderInfoRequest: false,
  orderInfoError: false
}

export const orderDetailsReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_ORDER_NUMBER: {
      return {...state, orderNumberRequest: true}
    }
    case REQUEST_ORDER_NUMBER_SUCCESS: {
      return {...state, orderNumberError: false, orderNumberRequest: false, orderNumber: action.order.number}
    }
    case REQUEST_ORDER_NUMBER_FAILED: {
      return {...state, orderNumberError: true, orderNumberRequest: false, orderNumber: 'Не удалось получить номер заказа'}
    }
    case REQUEST_ORDER_INFO: {
      return {...state, orders: [], orderInfoError: false, orderInfoRequest: true}
    }
    case REQUEST_ORDER_INFO_SUCCESS: {
      return {...state, orderInfoError: false, orderInfoRequest: false, orders: action.orders}
    }
    case REQUEST_ORDER_INFO_FAILED: {
      return {...state, orderInfoError: true, orderInfoRequest: false, orders: []}
    }
    default: return state;
  }
}