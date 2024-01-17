import styles from './line.module.css';
import { useSelector } from 'react-redux';
import { selectorBurgerIngridients } from '../../services/selectors';
import { LineOrder } from '../line-order/line-order';

export const Line = () => {
  const {burgerIngridients} = useSelector(selectorBurgerIngridients);
  const orders = [burgerIngridients, burgerIngridients, burgerIngridients, burgerIngridients, burgerIngridients];
  return (
    <ul className={`${styles.line} ${styles.lineOrder} custom-scroll`}>
      {orders.map((ingridients, id) => {
        return <LineOrder key={id} orderStatus={['done', 'await', 'created', 'canceled'][Math.floor(Math.random() * 4)]} ingridients={ingridients} />
      })}
    </ul>
  )
}