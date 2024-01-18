import styles from './line.module.css';
import { useSelector } from 'react-redux';
import { selectorBurgerIngridients } from '../../services/selectors';
import { LineOrder } from '../line-order/line-order';
import { LineIngridient } from '../line-ingridient/line-ingridient';


export const Line = ({type}) => {
  const {burgerIngridients} = useSelector(selectorBurgerIngridients);
  const orders = [burgerIngridients];
  switch(type) {
    case 'lineOrder': 
      return (
        <ul className={`${styles.line} ${styles[type]} custom-scroll`}>
          {orders.map((ingridients, id) => {
            return <LineOrder key={id} orderStatus={['done', 'await', 'created', 'canceled'][Math.floor(Math.random() * 4)]} ingridients={ingridients} />
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