import {ADD_INGRIDIENT_TO_CART, SET_TOTAL_PRICE, REMOVE_INGRIDIENT_FROM_CART, GET_COUNTER} from '../actions/constructor-ingridients';

const initialState = {
  ingridients: [],
  bun: null,
  totalPrice: 0,
  counter: {}
}

const generateID = item => {
  const prefix = ['a', 'z', 'b', 'x', 'w'];
  let res = '';
  prefix.forEach(() => {
    res += prefix[Math.floor(Math.random()*prefix.length)];
  });
  return item = {...item, elemID: `${res}${Date.now()}`};
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
			return action.ingridient.type === 'bun'
								? action.bun !== null
                            ? {...state, counter: {...state.counter, [action.bun._id]: 0, [action.ingridient._id]: 2}}
                            : {...state, counter: {...state.counter, [action.ingridient._id]: 2}}
                : {...state, counter: {...state.counter, [action.ingridient._id]: [...state.ingridients].filter(ingridient => ingridient._id === action.ingridient._id).length}}
		}
    default: return state;
  }
}