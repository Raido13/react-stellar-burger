import { SET_USER, SET_AUTH, ON_ERROR, SET_FORGOT, REMOVE_FORGOT } from "../actions/authentication";

const initialState = {
  user: null,
  auth: false,
  forgot: false,
  hasError: false
}

export const authenticationReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER: {
      return {...state, user: action.user, hasError: false}
    }
    case SET_AUTH: {
      return {...state, auth: action.auth}
    }
    case SET_FORGOT: {
      return {...state, forgot: true}
    }
    case REMOVE_FORGOT: {
      return {...state, forgot: false}
    }
    case ON_ERROR: {
      return {...state, hasError: true}
    }
    default: return state;
  }
}