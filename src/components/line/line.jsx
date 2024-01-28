import styles from './line.module.css';
import { LineOrder } from '../line-order/line-order';
import { LineIngridient } from '../line-ingridient/line-ingridient';
import PropTypes from 'prop-types';
import {ingredientTypes} from '../../utils/types';

export const Line = ({type, orders, ingridients}) => {
  switch(type) {
    case 'lineOrder': 
      return (
        <ul className={`${styles.line} ${styles[type]} custom-scroll`}>
          {orders.map((order, id) => {
            return (<LineOrder key={id} order={order} showStatus={true} />)
          }).reverse()}
        </ul>
      )
    case 'orderInfo': 
      return (
        <ul className={`${styles.line} ${styles[`${type}`]} custom-scroll`}>
          {ingridients.map((ingridient, id) => {
            return (<LineIngridient key={id} ingridient={ingridient} counter={ingridient.counter} />)
          })}
        </ul>
      )
    case 'lineFeed': {
      return (
        <ul className={`${styles.line} ${styles[type]} custom-scroll`}>
          {orders.map((order, id) => {
            return (<LineOrder key={id} order={order} />)
          })}
      </ul>
      )
    }
    default: return null;
  }
}

Line.propTypes = {
  type: PropTypes.string.isRequired,
  orders: PropTypes.arrayOf(PropTypes.object.isRequired),
  ingridients: PropTypes.arrayOf(ingredientTypes.isRequired)
}