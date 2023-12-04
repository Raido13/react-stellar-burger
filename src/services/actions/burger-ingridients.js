import {getIngridients} from '../../utils/api';

export const REQUEST_BURGER_INGRIDIENTS = 'REQUEST_BURGER_INGRIDIENTS';
export const REQUEST_BURGER_INGRIDIENTS_SUCCESS = 'REQUEST_BURGER_INGRIDIENTS_SUCCESS';
export const REQUEST_BURGER_INGRIDIENTS_FAILED = 'REQUEST_BURGER_INGRIDIENTS_FAILED';

export const getBurgerIngridients = () => {
  return function(dispatch) {
    dispatch({
      type: REQUEST_BURGER_INGRIDIENTS
    })
    getIngridients()
      .then(res => {
        dispatch({
          type: REQUEST_BURGER_INGRIDIENTS_SUCCESS,
          burgerIngridients: res
        })
      })
      .catch(() => {
        dispatch({
          type: REQUEST_BURGER_INGRIDIENTS_FAILED
        })
      })
  }
}