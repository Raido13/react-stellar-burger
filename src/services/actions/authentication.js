import {postSignUp, postSignIn, postLogout, postUpdate, getUser} from '../../utils/api';

export const SET_USER = 'SET_USER';
export const SET_AUTH = 'SET_AUTH';
export const ON_ERROR = 'ON_ERROR';
export const REQUEST_USER = 'REQUEST_USER';

export const userSignUp = (form) => {
  return function(dispatch) {
    postSignUp(form)
      .then(res => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        dispatch({type: SET_USER, user: res.user});
        dispatch({type: SET_AUTH, auth: true});
      })
      .catch(() => dispatch({type: ON_ERROR}))
  }
}

export const userSignIn = (form) => {
  return function(dispatch) {
    postSignIn(form)
      .then(res => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        dispatch({type: SET_USER, user: res.user});
        dispatch({type: SET_AUTH, auth: true});
      })
      .catch(() => dispatch({type: ON_ERROR}))
  }
}

export const userUpdate = (form) => {
  return function(dispatch) {
    return postUpdate(form)
              .then(res => {
                dispatch({type: SET_USER, user: res.user});
              })
              .catch(() => dispatch({type: ON_ERROR}))
  }
}

export const setUser = () => {
  return function(dispatch) {
    return getUser()
              .then(res => {
                dispatch({type: SET_USER, user: res.user});
              })
              .catch(() => dispatch({type: ON_ERROR}))
  }
}

export const userLogout = () => {
  return function(dispatch) {
    return postLogout()
              .then(res => {
                localStorage.removeItem('accessToken', res.accessToken);
                localStorage.removeItem('refreshToken', res.refreshToken);
                dispatch({type: SET_USER, user: null});
              })
              .catch(() => dispatch({type: ON_ERROR}))
              .finally(() => {
                dispatch({type: SET_AUTH, auth: false});
              })
  }
}

export const checkAuth = () => {
  return function(dispatch) {
    dispatch({type: REQUEST_USER, request: true});
    if(localStorage.getItem('accessToken')) {
      dispatch(setUser())
            .catch(() => {
              localStorage.removeItem('accessToken')
              localStorage.removeItem('refreshToken')
              dispatch({type: SET_USER, user: null})
            })
            .finally(() => {
              dispatch({type: SET_AUTH, auth: true});
              dispatch({type: REQUEST_USER, request: false});
            })
    } else {
      dispatch({type: SET_AUTH, auth: false})
      dispatch({type: REQUEST_USER, request: false});
    }
  }
}