import {
  REQUEST_ORDER_NUMBER,
  REQUEST_ORDER_NUMBER_SUCCESS,
  REQUEST_ORDER_NUMBER_FAILED,
  REQUEST_ORDER_INFO,
  REQUEST_ORDER_INFO_SUCCESS,
  REQUEST_ORDER_INFO_FAILED,
  TOrderActions
} from '../actions/order-details';
import { TOrder } from '../types';

type TOrderState = {
  orderNumberRequest: boolean,
  orderNumberError: boolean,
  orderNumber: number | null | string,
  orders: TOrder[] | null,
  orderInfoRequest: boolean,
  orderInfoError: boolean
}

const initialState : TOrderState = {
  orderNumberRequest: false,
  orderNumberError: false,
  orderNumber: null,
  orders: null,
  orderInfoRequest: false,
  orderInfoError: false
}

export const orderDetailsReducer = (state = initialState, action : TOrderActions) : TOrderState => {
  switch(action.type) {
    case REQUEST_ORDER_NUMBER: {
      return {...state, orderNumberRequest: true, orderNumber: null}
    }
    case REQUEST_ORDER_NUMBER_SUCCESS: {
      return {...state, orderNumberError: false, orderNumberRequest: false, orderNumber: action.order.number}
    }
    case REQUEST_ORDER_NUMBER_FAILED: {
      return {...state, orderNumberError: true, orderNumberRequest: false, orderNumber: 'Не удалось получить номер заказа'}
    }
    case REQUEST_ORDER_INFO: {
      return {...state, orders: null, orderInfoError: false, orderInfoRequest: true}
    }
    case REQUEST_ORDER_INFO_SUCCESS: {
      return {...state, orderInfoError: false, orderInfoRequest: false, orders: action.orders}
    }
    case REQUEST_ORDER_INFO_FAILED: {
      return {...state, orderInfoError: true, orderInfoRequest: false, orders: null}
    }
    default: return state;
  }
}