import { TIngridient, TIngridientUid } from "../types";

export const ADD_INGRIDIENT_TO_CART : 'ADD_INGRIDIENT_TO_CART' = 'ADD_INGRIDIENT_TO_CART';
export const REMOVE_INGRIDIENT_FROM_CART : 'REMOVE_INGRIDIENT_FROM_CART' = 'REMOVE_INGRIDIENT_FROM_CART';
export const GET_COUNTER : 'GET_COUNTER' = 'GET_COUNTER';
export const SET_TOTAL_PRICE : 'SET_TOTAL_PRICE' = 'SET_TOTAL_PRICE';
export const UPDATE_INGRIDIENT_POSITIONS : 'UPDATE_INGRIDIENT_POSITIONS' = 'UPDATE_INGRIDIENT_POSITIONS';
export const SET_EMPTY_CART : 'SET_EMPTY_CART' = 'SET_EMPTY_CART';

type TAddIngridientToCartAction = { type : typeof ADD_INGRIDIENT_TO_CART, ingridient : TIngridientUid }
type TRemoveIngridientFromCartAction = { type : typeof REMOVE_INGRIDIENT_FROM_CART, ingridient : TIngridientUid }
type TGetCounterAction = { type: typeof GET_COUNTER,  ingridient : TIngridient, bun : TIngridient }
type TSetTotalPriceAction = { type: typeof SET_TOTAL_PRICE }
type TUpdateIngridientsPositionsAction = { type: typeof UPDATE_INGRIDIENT_POSITIONS, ingridients: TIngridientUid[] }
type TSetEmptyCartAction = { type: typeof SET_EMPTY_CART}

export type TConstrucorIngridientsActions =
  | TAddIngridientToCartAction
  | TRemoveIngridientFromCartAction
  | TGetCounterAction
  | TSetTotalPriceAction
  | TUpdateIngridientsPositionsAction
  | TSetEmptyCartAction;