import { SET_USER, SET_AUTH, ON_ERROR, REQUEST_USER } from "../actions/authentication";

const initialState = {
  user: null,
  auth: false,
  hasError: false,
  userRequested: false
}

export const authenticationReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER: {
      return {...state, user: action.user, hasError: false}
    }
    case SET_AUTH: {
      return {...state, auth: action.auth}
    }
    case ON_ERROR: {
      return {...state, hasError: true}
    }
    case REQUEST_USER: {
      return {...state, userRequested: action.request}
    }
    default: return state;
  }
}