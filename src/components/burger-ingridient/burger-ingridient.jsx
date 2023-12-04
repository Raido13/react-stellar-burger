import styles from './burger-ingridient.module.css';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ingredientTypes} from '../../utils/types';
import { useDispatch, useSelector } from 'react-redux';
import {SET_INGRIDIENT_DETAILS} from '../../services/actions/ingridient-details';
import {OPEN_MODAL} from '../../services/actions/event-handler';
import { ADD_INGRIDIENT_TO_CART, SET_TOTAL_PRICE, GET_COUNTER } from '../../services/actions/constructor-ingridients';

export default function BurgerIngridient({ingridient}) {
  const dispatch = useDispatch();
  const {image, name, price, _id} = ingridient;
  const {counter, bun} = useSelector(store => store.constructorIngridients);
  const handleEvents = ingridient => {
    dispatch({type: SET_INGRIDIENT_DETAILS, ingridient});
    dispatch({type: ADD_INGRIDIENT_TO_CART, ingridient});
    dispatch({type: GET_COUNTER, ingridient, bun});
    dispatch({type: SET_TOTAL_PRICE});
    dispatch({type: OPEN_MODAL, kind: 'ingridient'})
  }

  return (
    <div className={styles.burgerIngridient} onClick={() => handleEvents(ingridient)} >
      {counter[_id] > 0 && <Counter count={counter[_id]} size="default" extraClass="m-1" />}
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.price}><p className={`text text_type_digits-default`}>{price}</p><CurrencyIcon type="primary" /></div>
      <p className={`${styles.name} text text_type_main-default`}>{name}</p>
    </div>
  )
}

BurgerIngridient.propTypes = {
  ingridient: ingredientTypes.isRequired
}