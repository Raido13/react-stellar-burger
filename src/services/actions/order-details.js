import {getOrderNumber} from '../../utils/api';

export const REQUEST_ORDER_DETAILS = 'REQUEST_ORDER_DETAILS';
export const REQUEST_ORDER_DETAILS_SUCCESS = 'REQUEST_ORDER_DETAILS_SUCCESS';
export const REQUEST_ORDER_DETAILS_FAILED = 'REQUEST_ORDER_DETAILS_FAILED';

export const getOrderNumberID = (Ids) => {
  return function(dispatch) {
    dispatch({
      type: REQUEST_ORDER_DETAILS
    })
    getOrderNumber(Ids)
      .then(res => {
        dispatch({
          type: REQUEST_ORDER_DETAILS_SUCCESS,
          order: res
        })
      })
      .catch(() => {
        dispatch({
          type: REQUEST_ORDER_DETAILS_FAILED
        })
      })
  }
}