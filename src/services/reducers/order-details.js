import {REQUEST_ORDER_DETAILS, REQUEST_ORDER_DETAILS_SUCCESS, REQUEST_ORDER_DETAILS_FAILED} from '../actions/order-details';

const initialState = {
  isLoading: false,
  hasError: false,
  number: null
}

export const orderDetailsReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_ORDER_DETAILS: {
      return {...state, isLoading: true}
    }
    case REQUEST_ORDER_DETAILS_SUCCESS: {
      return {...state, hasError: false, isLoading: false, number: action.order.number}
    }
    case REQUEST_ORDER_DETAILS_FAILED: {
      return {...state, hasError: true, isLoading: false, number: 'Не удалось получить номер заказа'}
    }
    default: return state;
  }
}