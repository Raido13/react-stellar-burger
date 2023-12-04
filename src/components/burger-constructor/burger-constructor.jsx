import styles from './burger-constructor.module.css';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorIngridients from '../constructor-ingridients/constructor-ingridietns';
import { useDispatch, useSelector } from 'react-redux';
import {OPEN_MODAL} from '../../services/actions/event-handler';
import {getOrderNumberID} from '../../services/actions/order-details';

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const {bun, ingridients, totalPrice} = useSelector(store => store.constructorIngridients);
  const summary = () => {
    return [bun._id, ...ingridients.map(ingridient => ingridient._id), bun._id]
  }

  const handleEvents = () => {
    if(!bun || !ingridients.length) {
      return;
    }
    else {
      dispatch(getOrderNumberID(summary()));
      dispatch({type: OPEN_MODAL, kind: 'order'})
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