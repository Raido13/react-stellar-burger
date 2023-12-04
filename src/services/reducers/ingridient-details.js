import {SET_INGRIDIENT_DETAILS, REMOVE_INGRIDIENT_DETAILS} from '../actions/ingridient-details';

const initialState = {
  ingridient: null
}

export const ingridientDetailsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_INGRIDIENT_DETAILS: {
      return {...state, ingridient: action.ingridient}
    }
    case REMOVE_INGRIDIENT_DETAILS: {
      return {...state, ingridient: null}
    }
    default: return state;
  }
}