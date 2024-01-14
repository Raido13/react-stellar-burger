import { SET_USER, SET_AUTH, ON_ERROR } from "../actions/authentication";

const initialState = {
  user: null,
  auth: false,
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
    case ON_ERROR: {
      return {...state, hasError: true}
    }
    default: return state;
  }
}