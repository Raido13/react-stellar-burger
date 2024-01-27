import {ADD_INGRIDIENT_TO_CART, SET_TOTAL_PRICE, REMOVE_INGRIDIENT_FROM_CART, GET_COUNTER, UPDATE_INGRIDIENT_POSITIONS, SET_EMPTY_CART} from '../actions/constructor-ingridients';
import {v4 as uuidv4} from 'uuid';

const initialState = {
  ingridients: [],
  bun: null,
  totalPrice: 0,
  counter: {}
}

const generateID = item => {
  return item = {...item, elemID: uuidv4()};
}

export const constructorIngridientsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_INGRIDIENT_TO_CART: {
      return action.ingridient.type === 'bun'
                  ? {...state, bun: action.ingridient}
                  : {...state, ingridients: [...state.ingridients, generateID(action.ingridient)]}
    }
    case SET_TOTAL_PRICE: {
      const buns = state.bun === null ? 0 : state.bun.price * 2;
      return {...state, totalPrice: !state.ingridients.length ? buns : state.ingridients.map(ingridient => ingridient.price).reduce((a, b) => a + b, 0) + buns}
    }
    case REMOVE_INGRIDIENT_FROM_CART: {
      return {...state, ingridients: [...state.ingridients].filter(ingridient => ingridient.elemID !== action.ingridient.elemID)}
    }
    case GET_COUNTER: {
			return action.ingridient !== null
                    ? action.ingridient.type === 'bun'
                            ? action.bun !== null
                                        ? {...state, counter: {...state.counter, [action.bun._id]: 0, [action.ingridient._id]: 2}}
                                        : {...state, counter: {...state.counter, [action.ingridient._id]: 2}}
                            : {...state, counter: {...state.counter, [action.ingridient._id]: [...state.ingridients].filter(ingridient => ingridient._id === action.ingridient._id).length}}
                    : {...state, counter: {}}
		}
    case UPDATE_INGRIDIENT_POSITIONS: {
      return {...state, ingridients: action.ingridients}
    }
    case SET_EMPTY_CART: {
      return {...state, bun: null, ingridients: []}
    }
    default: return state;
  }
}