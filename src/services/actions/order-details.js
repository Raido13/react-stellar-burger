import {requestOrderNumber, requestOrderInfo} from '../../utils/api';

export const REQUEST_ORDER_NUMBER = 'REQUEST_ORDER_NUMBER';
export const REQUEST_ORDER_NUMBER_SUCCESS = 'REQUEST_ORDER_NUMBER_SUCCESS';
export const REQUEST_ORDER_NUMBER_FAILED = 'REQUEST_ORDER_NUMBER_FAILED';
export const REQUEST_ORDER_INFO = 'REQUEST_ORDER_INFO';
export const REQUEST_ORDER_INFO_SUCCESS = 'REQUEST_ORDER_INFO_SUCCESS';
export const REQUEST_ORDER_INFO_FAILED = 'REQUEST_ORDER_INFO_FAILED';

export const getOrderNumber = (ids) => {
  return function(dispatch) {
    dispatch({
      type: REQUEST_ORDER_NUMBER
    })
    requestOrderNumber(ids)
      .then(res => {
        dispatch({
          type: REQUEST_ORDER_NUMBER_SUCCESS,
          order: res
        })
      })
      .catch(() => {
        dispatch({
          type: REQUEST_ORDER_NUMBER_FAILED
        })
      })
  }
}

export const getOrderInfo = (number) => {
  return function(dispatch) {
    dispatch({
      type: REQUEST_ORDER_INFO
    })
    requestOrderInfo(number)
      .then(res => {
        dispatch({
          type: REQUEST_ORDER_INFO_SUCCESS,
          orders: res
        })
      })
      .catch(() => {
        dispatch({
          type: REQUEST_ORDER_INFO_FAILED
        })
      })
  }
}