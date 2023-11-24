import {GET_INGRIDIENT_DETAILS, REMOVE_INGRIDIENT_DETAILS} from '../actions/ingridient-details';

const initialState = {
  ingridientDetails: {}
}

export const ingridientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGRIDIENT_DETAILS: {
      return {...state, ingridientDetails: action.ingridient}
    }
    case REMOVE_INGRIDIENT_DETAILS: {
      return {...state, ingridientDetails: {}}
    }
    default: state;
  }
}