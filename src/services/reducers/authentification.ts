import { ON_ERROR, REQUEST_USER, SET_AUTH, SET_USER, TAuthActions } from "../actions/authentification";
import { TUser } from "../types";

export type TAuthState = {
  user: TUser | null;
  auth: boolean;
  hasError: boolean;
  userRequested: boolean
}

const initialState : TAuthState = {
  user: null,
  auth: false,
  hasError: false,
  userRequested: false
}

export const authentificationReducer = (state = initialState, action : TAuthActions) : TAuthState => {
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