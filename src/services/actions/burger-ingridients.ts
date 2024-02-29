import { getIngridients } from '../../utils/api';
import { AppDispatch, TIngridient } from '../types';

export const REQUEST_BURGER_INGRIDIENTS : 'REQUEST_BURGER_INGRIDIENTS' = 'REQUEST_BURGER_INGRIDIENTS';
export const REQUEST_BURGER_INGRIDIENTS_SUCCESS : 'REQUEST_BURGER_INGRIDIENTS_SUCCESS' = 'REQUEST_BURGER_INGRIDIENTS_SUCCESS';
export const REQUEST_BURGER_INGRIDIENTS_FAILED : 'REQUEST_BURGER_INGRIDIENTS_FAILED' = 'REQUEST_BURGER_INGRIDIENTS_FAILED';

type TRequestBurgerIngridientsAction = { type: typeof REQUEST_BURGER_INGRIDIENTS }
type TRequestBurgerIngridientsSuccessAction = { type: typeof REQUEST_BURGER_INGRIDIENTS_SUCCESS, burgerIngridients: TIngridient[] }
type TRequestBurgerIngridientsFailedAction = { type: typeof REQUEST_BURGER_INGRIDIENTS_FAILED }

const requestBurgerIngridientsAction = () : TRequestBurgerIngridientsAction => ({ type: REQUEST_BURGER_INGRIDIENTS })
const requestBurgerIngridientsSuccessAction = (data: TIngridient[]) : TRequestBurgerIngridientsSuccessAction => ({ type: REQUEST_BURGER_INGRIDIENTS_SUCCESS, burgerIngridients: data })
const requestBurgerIngridientsFailedAction = () : TRequestBurgerIngridientsFailedAction => ({ type: REQUEST_BURGER_INGRIDIENTS_FAILED })

export type TBurgerIngridientsActions =
  | TRequestBurgerIngridientsAction
  | TRequestBurgerIngridientsSuccessAction
  | TRequestBurgerIngridientsFailedAction;

export const getBurgerIngridients = () => {
  return function(dispatch : AppDispatch) {
    dispatch(requestBurgerIngridientsAction())
    getIngridients()
      .then(res => {
        dispatch(requestBurgerIngridientsSuccessAction(res))
      })
      .catch(() => {
        dispatch(requestBurgerIngridientsFailedAction())
      })
  }
}