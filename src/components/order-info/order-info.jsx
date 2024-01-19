import styles from './order-info.module.css';
import { Line } from '../line/line';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export const OrderInfo = ({ingridients, orderStatus, updateTitle}) => {
  const orderNumber = '034534';
  const orderData = 'Сегодня, 13:20 i-GMT+3';
  const orderName = 'Test';
  const orderPrice = ingridients.reduce((totalPrice, {price}) => {return totalPrice + price}, 0);
  const orderCompound = 'Состав:';

  return (
    <div className={styles.orderInfo}>
      <p className={`text text_type_digits-default ${updateTitle ? styles.orderNumber2 : styles.orderNumber}`}>#{orderNumber}</p>
      <div className={styles.orderOverview}>
        <p className="text text_type_main-medium">{orderName}</p>
        <p className={`text text_type_main-default ${styles[`${orderStatus}`]}`}>{orderStatus}</p>
      </div>
      <p className={`text text_type_main-medium ${styles.orderCompound}`}>{orderCompound}</p>
      <Line type={'orderInfo'}></Line>
      <div className={styles.dataContainer}>
        <p className={`text text_type_main-default text_color_inactive ${styles.orderData}`}>{orderData}</p>
        <div className={styles.price}>
          <p className='text text_type_digits-default'>{orderPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  )
}