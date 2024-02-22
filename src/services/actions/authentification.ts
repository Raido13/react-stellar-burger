import { postSignUp, postSignIn, postLogout, postUpdate, getUser } from '../../utils/api';
import { WS_CLEAR_PROFILE_ORDERS } from './websocket';
import { AppThunk, AppDispatch } from '../types';
import { TSignIn, TSignUp, TUser } from '../types';

export const SET_USER : 'SET_USER' = 'SET_USER';
export const SET_AUTH : 'SET_AUTH' = 'SET_AUTH';
export const ON_ERROR : 'ON_ERROR' = 'ON_ERROR';
export const REQUEST_USER : 'REQUEST_USER' = 'REQUEST_USER';

export type TSetUserAction = {
  readonly type: typeof SET_USER;
  readonly user: TUser | null
}

export type TSetAuthAction = {
  readonly type: typeof SET_AUTH;
  readonly auth: boolean
}

export type TSetErrorAction = {
  readonly type: typeof ON_ERROR
}

export type TSetRequestAction = {
  readonly type: typeof REQUEST_USER;
  readonly request: boolean
}

export type TClearOrdersAction = {
  readonly type: typeof WS_CLEAR_PROFILE_ORDERS
}

export type TAuthActions = 
  | TSetUserAction
  | TSetAuthAction
  | TSetErrorAction
  | TSetRequestAction
  | TClearOrdersAction;

export const setUserAction = (user : TUser | null) : TSetUserAction => ({type: SET_USER, user: user});
export const setAuthAction = (auth : boolean) : TSetAuthAction => ({type: SET_AUTH, auth: auth});
export const setErrorAction = () : TSetErrorAction => ({type: ON_ERROR});
export const setRequestAction = (request : boolean) : TSetRequestAction => ({type: REQUEST_USER, request: request});
export const clearOrdersAction = () : TClearOrdersAction => ({type: WS_CLEAR_PROFILE_ORDERS});

export const userSignUp : AppThunk = (form : TSignUp) => {
  return function(dispatch : AppDispatch) {
    postSignUp(form)
      .then(res => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        dispatch(setUserAction(res.user));
        dispatch(setAuthAction(true));
      })
      .catch(() => dispatch(setErrorAction()))
  }
}

export const userSignIn : AppThunk = (form : TSignIn) => {
  return function(dispatch : AppDispatch) {
    postSignIn(form)
      .then(res => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        dispatch(setUserAction(res.user));
        dispatch(setAuthAction(true));
      })
      .catch(() => dispatch(setErrorAction()))
  }
}

export const userUpdate : AppThunk = (form : TSignUp) => {
  return function(dispatch : AppDispatch) {
    return postUpdate(form)
              .then(res => {
                dispatch(setUserAction(res.user));
              })
              .catch(() => dispatch(setErrorAction()))
  }
}

export const setUser : AppThunk = () => {
  return function(dispatch : AppDispatch) {
    return getUser()
              .then(res => {
                dispatch(setUserAction(res.user));
              })
              .catch(() => dispatch(setErrorAction()))
  }
}

export const userLogout : AppThunk = () => {
  return function(dispatch : AppDispatch) {
    return postLogout()
              .then(() => {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                dispatch(setUserAction(null));
              })
              .catch(() => dispatch(setErrorAction()))
              .finally(() => {
                dispatch(setAuthAction(false));
                dispatch(clearOrdersAction())
              })
  }
}

export const checkAuth : AppThunk = () => {
  return function(dispatch : AppDispatch) {
    dispatch(setRequestAction(true));
    if(localStorage.getItem('accessToken')) {
      dispatch(setUser());
      return getUser()
            .catch(() => {
              localStorage.removeItem('accessToken');
              localStorage.removeItem('refreshToken');
              dispatch(setUserAction(null))
            })
            .finally(() => {
              dispatch(setAuthAction(true));
              dispatch(setRequestAction(false))
            })
    } else {
      dispatch(setAuthAction(false));
      dispatch(setRequestAction(false))
    }
  }
}