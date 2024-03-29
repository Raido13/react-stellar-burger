import styles from './burger-constructor.module.css';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorIngridients from '../constructor-ingridients/constructor-ingridients';
import { useDispatch, useSelector } from '../../services/hooks';
import {OPEN_MODAL} from '../../services/actions/event-handler';
import {getOrderNumber} from '../../services/actions/order-details';
import { GET_COUNTER, SET_EMPTY_CART, SET_TOTAL_PRICE } from '../../services/actions/constructor-ingridients';
import { useNavigate } from 'react-router-dom';
import { selectorConstructorIngridients } from '../../services/selectors';

export const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const {bun, ingridients, totalPrice} = useSelector(selectorConstructorIngridients);
  const {auth, user} = useSelector(store => store.authentification);
  const navigate = useNavigate();
  const summary = () => [bun?._id, ...ingridients.map(ingridient => ingridient._id), bun?._id]

  const handleEvents = () => {
    if(!bun || !ingridients.length) {
      return;
    }

    if(!auth || user === null) {
      return navigate('/login');
    }
    
    else {
      dispatch(getOrderNumber(summary()));
      dispatch({type: OPEN_MODAL});
      dispatch({type: SET_EMPTY_CART});
      dispatch({type: SET_TOTAL_PRICE});
      dispatch({type: GET_COUNTER, ingridient: null, bun})
    }
  }
  
  return (
    <div className={styles.burgerConstructor}>
      <ConstructorIngridients />
      <div className={styles.container}>
        <div className={styles.total}>
          <p className='text text_type_digits-medium'>{totalPrice}</p>
          <div className={styles.icon}><CurrencyIcon type="primary" /></div>
        </div>
        <Button htmlType="button" onClick={handleEvents} type="primary" extraClass={styles.button} size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}