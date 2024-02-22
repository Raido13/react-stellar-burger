import { REQUEST_BURGER_INGRIDIENTS, REQUEST_BURGER_INGRIDIENTS_SUCCESS, REQUEST_BURGER_INGRIDIENTS_FAILED, TBurgerIngridientsActions } from '../actions/burger-ingridients';
import { TIngridient } from '../types';

type TBurgerIngridients = {
  isLoading: boolean;
  hasError: boolean;
  burgerIngridients: [] | TIngridient[]
}

const initialState : TBurgerIngridients = {
  isLoading: false,
  hasError: false,
  burgerIngridients: []
}

export const burgerIngridientsReducer = (state = initialState, action : TBurgerIngridientsActions) : TBurgerIngridients => {
  switch(action.type) {
    case REQUEST_BURGER_INGRIDIENTS: {
      return {...state, isLoading: true}
    }
    case REQUEST_BURGER_INGRIDIENTS_SUCCESS: {
      return {...state, hasError: false, isLoading: false, burgerIngridients: action.burgerIngridients}
    }
    case REQUEST_BURGER_INGRIDIENTS_FAILED: {
      return {...state, hasError: true, isLoading: false}
    }
    default: return state;
  }
}