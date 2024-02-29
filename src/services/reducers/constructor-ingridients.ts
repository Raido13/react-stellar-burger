import { ADD_INGRIDIENT_TO_CART, SET_TOTAL_PRICE, REMOVE_INGRIDIENT_FROM_CART, GET_COUNTER, UPDATE_INGRIDIENT_POSITIONS, SET_EMPTY_CART, TConstrucorIngridientsActions } from '../actions/constructor-ingridients';
import { TIngridientUid } from "../types";

type TConstrucorIngridientsState = {
  ingridients: [] | TIngridientUid[];
  bun: null | TIngridientUid;
  totalPrice: number;
  counter: null | { [key : string] : number }
}

const initialState : TConstrucorIngridientsState = {
  ingridients: [],
  bun: null,
  totalPrice: 0,
  counter: {}
}

export const constructorIngridientsReducer = (state = initialState, action : TConstrucorIngridientsActions) : TConstrucorIngridientsState => {
  switch(action.type) {
    case ADD_INGRIDIENT_TO_CART: {
      return action.ingridient.type === 'bun'
                  ? {...state, bun: action.ingridient}
                  : {...state, ingridients: [...state.ingridients, action.ingridient]}
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