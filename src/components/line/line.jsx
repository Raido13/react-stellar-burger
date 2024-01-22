import styles from './line.module.css';
import { useSelector } from 'react-redux';
import { selectorBurgerIngridients } from '../../services/selectors';
import { LineOrder } from '../line-order/line-order';
import { LineIngridient } from '../line-ingridient/line-ingridient';


export const Line = ({type, orders}) => {
  const {burgerIngridients} = useSelector(selectorBurgerIngridients);
  console.log(orders);
  switch(type) {
    case 'lineOrder': 
      return (
        <ul className={`${styles.line} ${styles[type]} custom-scroll`}>
          {orders.map((order, id) => {
            return <LineOrder key={id} order={order} />
          })}
        </ul>
      )
    case 'orderInfo': 
      return (
        <ul className={`${styles.line} ${styles[`${type}`]} custom-scroll`}>
          {burgerIngridients.map((ingridient, id) => {
            return <LineIngridient key={id} ingridient={ingridient} counter={burgerIngridients.filter(({_id}) => (_id === ingridient._id)).length} />
          })}
        </ul>
      )
    case 'lineFeed': {
      return (
        <ul className={`${styles.line} ${styles[type]} custom-scroll`}>
          {orders.map((ingridients, id) => {
            return <LineOrder key={id} ingridients={ingridients} />
          })}
      </ul>
      )
    }
    default: return null;
  }
}