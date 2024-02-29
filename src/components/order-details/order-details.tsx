import { useSelector } from '../../services/hooks';
import blot from '../../images/blot.png';
import styles from './order-details.module.css';
import { selectorOrderDetails } from '../../services/selectors';

export const OrderDetails = () => {
  const {orderNumber} = useSelector(selectorOrderDetails)
  return (
    <div className={styles.orderDetails}>
      {orderNumber && <h3 className={`${styles.number} text text_type_digits-large`}>{orderNumber}</h3>}
      {orderNumber ? <p className={`${styles.id} text text_type_main-medium`}>идентификатор заказа</p> : <p className={`${styles.id} text text_type_main-medium`}>Формируем номер заказа...</p>}
      <img className={styles.blot} src={blot} alt="заказ подтверждён" />
      {orderNumber && <p className={`${styles.prepare} text text_type_main-default`}>Ваш заказ начали готовить</p>}
      {orderNumber && <p className={`${styles.awayt} text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>}
    </div>
  )
}