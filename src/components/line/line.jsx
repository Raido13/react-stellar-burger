import styles from './line.module.css';
import { LineOrder } from '../line-order/line-order';
import { LineIngridient } from '../line-ingridient/line-ingridient';


export const Line = ({type, orders, ingridients}) => {
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
          {ingridients.map((ingridient, id) => {
            return <LineIngridient key={id} ingridient={ingridient} counter={ingridients.filter(({_id}) => (_id === ingridient._id)).length} />
          })}
        </ul>
      )
    case 'lineFeed': {
      return (
        <ul className={`${styles.line} ${styles[type]} custom-scroll`}>
          {orders.map((order, id) => {
            return <LineOrder key={id} {...order} />
          })}
      </ul>
      )
    }
    default: return null;
  }
}