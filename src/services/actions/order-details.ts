import { requestOrderNumber, requestOrderInfo } from '../../utils/api';
import { AppDispatch, AppThunk, TOrder } from '../types';

export const REQUEST_ORDER_NUMBER : 'REQUEST_ORDER_NUMBER' = 'REQUEST_ORDER_NUMBER';
export const REQUEST_ORDER_NUMBER_SUCCESS : 'REQUEST_ORDER_NUMBER_SUCCESS' = 'REQUEST_ORDER_NUMBER_SUCCESS';
export const REQUEST_ORDER_NUMBER_FAILED : 'REQUEST_ORDER_NUMBER_FAILED' = 'REQUEST_ORDER_NUMBER_FAILED';
export const REQUEST_ORDER_INFO : 'REQUEST_ORDER_INFO' = 'REQUEST_ORDER_INFO';
export const REQUEST_ORDER_INFO_SUCCESS : 'REQUEST_ORDER_INFO_SUCCESS' = 'REQUEST_ORDER_INFO_SUCCESS';
export const REQUEST_ORDER_INFO_FAILED : 'REQUEST_ORDER_INFO_FAILED' = 'REQUEST_ORDER_INFO_FAILED';

export type TRequestNumberAction = { readonly type: typeof REQUEST_ORDER_NUMBER };
export type TRequestNumberSuccessAction = { readonly type: typeof REQUEST_ORDER_NUMBER_SUCCESS; readonly order: TOrder };
export type TRequestNumberFailedAction = { readonly type: typeof REQUEST_ORDER_NUMBER_FAILED };
export type TRequestInfoAction = { readonly type: typeof REQUEST_ORDER_INFO };
export type TRequestInfoSuccessAction = { readonly type: typeof REQUEST_ORDER_INFO_SUCCESS; readonly orders: TOrder[] };
export type TRequestInfoFailedAction = { readonly type: typeof REQUEST_ORDER_INFO_FAILED };

export const requestNumberAction = () : TRequestNumberAction => ({ type: REQUEST_ORDER_NUMBER });
export const requestNumberSuccessAction = (res : TOrder) : TRequestNumberSuccessAction => ({ type: REQUEST_ORDER_NUMBER_SUCCESS, order: res });
export const requestNumberFailedAction = () : TRequestNumberFailedAction => ({ type: REQUEST_ORDER_NUMBER_FAILED });
export const requestInfoAction = () : TRequestInfoAction => ({ type: REQUEST_ORDER_INFO });
export const requestInfoSuccessAction = (res : TOrder[]) : TRequestInfoSuccessAction => ({ type: REQUEST_ORDER_INFO_SUCCESS, orders: res });
export const requestInfoFailedAction = () : TRequestInfoFailedAction => ({ type: REQUEST_ORDER_INFO_FAILED });

export type TOrderActions =
 | TRequestNumberAction
 | TRequestNumberSuccessAction
 | TRequestNumberFailedAction
 | TRequestInfoAction
 | TRequestInfoSuccessAction
 | TRequestInfoFailedAction;

export const getOrderNumber : AppThunk = (ids : string[]) => {
  return function(dispatch : AppDispatch) {
    dispatch(requestNumberAction())
    requestOrderNumber(ids)
      .then(res => {
        dispatch(requestNumberSuccessAction(res))
      })
      .catch(() => {
        dispatch(requestNumberFailedAction())
      })
  }
}

export const getOrderInfo : AppThunk = (number : number) => {
  return function(dispatch : AppDispatch) {
    dispatch(requestInfoAction())
    requestOrderInfo(number)
      .then(res => {
        dispatch(requestInfoSuccessAction(res))
      })
      .catch(() => {
        dispatch(requestInfoFailedAction())
      })
  }
}