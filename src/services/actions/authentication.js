import {postSignUp, postSignIn, postForgot, postRecovery, postLogout, postUpdate, getUser} from '../../utils/api';

export const SET_USER = 'SET_USER';
export const SET_AUTH = 'SET_AUTH';
export const SET_FORGOT = 'SET_FORGOT';
export const REMOVE_FORGOT = 'REMOVE_FORGOT';
export const ON_ERROR = 'ON_ERROR';

export const userSignUp = (form) => {
  return function(dispatch) {
    postSignUp(form)
      .then(res => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        dispatch({type: SET_USER, user: res.user});
        dispatch({type: SET_AUTH, auth: true});
      })
      .catch(dispatch({type: ON_ERROR}))
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
      .catch(dispatch({type: ON_ERROR}))
  }
}

export const userForgot = (form) => {
  return function(dispatch) {
    postForgot(form)
      .then(() => {
        dispatch({type: SET_FORGOT, approve: true});
      })
      .catch(dispatch({type: ON_ERROR}))
  }
}

export const userRecovery = (form) => {
  return function(dispatch) {
    postRecovery(form)
      .then(() => {
        dispatch({type: SET_FORGOT, approve: false});
      })
      .catch(dispatch({type: ON_ERROR}))
  }
}

export const userUpdate = (form) => {
  return function(dispatch) {
    return postUpdate(form)
              .then(res => {
                dispatch({type: SET_USER, user: res.user});
              })
              .catch(dispatch({type: ON_ERROR}))
  }
}

export const setUser = () => {
  return function(dispatch) {
    return getUser()
              .then(res => {
                dispatch({type: SET_USER, user: res.user});
              })
              .catch(dispatch({type: ON_ERROR}))
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
              .catch(dispatch({type: ON_ERROR}))
              .finally(() => {
                dispatch({type: SET_AUTH, auth: false});
              })
  }
}

export const checkAuth = () => {
  return function(dispatch) {
    if(localStorage.getItem('accessToken')) {
      dispatch(setUser())
            .catch(() => {
              localStorage.removeItem('accessToken')
              localStorage.removeItem('refreshToken')
              dispatch({type: SET_USER, user: null})
            })
            .finally(() => dispatch({type: SET_AUTH, auth: true}))
    } else {
      dispatch({type: SET_AUTH, auth: true})
    }
  }
}