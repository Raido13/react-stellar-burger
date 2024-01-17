import { IngridientMini } from '../ingridient-mini/ingridient-mini';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './line-order.module.css';

export const LineOrder = ({ingridients, orderStatus}) => {
  // const {orderNumber, orderData, orderName, ingridients} = order;
  const orderNumber = '034534';
  const orderData = 'Сегодня, 13:20 i-GMT+3';
  const orderName = 'Test';
  const orderPrice = ingridients.reduce((totalPrice, {price}) => {return totalPrice + price}, 0);
  const overSize = ingridients.length > 5 ? ingridients.length - 5 : undefined;
  const maxSize = 5;

  return (
    <li className={styles.lineOrder}>
      <div className={styles.orderInfo}>
        <p className='text text_type_digits-default'>#{orderNumber}</p>
        <p className="text text_type_main-default text_color_inactive">{orderData}</p>
      </div>
      <p className="text text_type_main-medium">{orderName}</p>
      <p className={`text text_type_main-default ${styles[`${orderStatus}`]}`}>{orderStatus}</p>
      <div className={styles.ingridientsContainer}>
        <ul className={styles.ingridients}>
          {ingridients.map((ingridient, id) => {
            return maxSize > id
                      ? <IngridientMini ingridient={ingridient} id={id} key={id} />
                      : maxSize === id
                            ? <IngridientMini ingridient={ingridient} id={id} key={id} overSize={overSize} />
                            : null
          })}
        </ul>
        <div className={styles.price}>
          <p className='text text_type_digits-default'>{orderPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  )
}