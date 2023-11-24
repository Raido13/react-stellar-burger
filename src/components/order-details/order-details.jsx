import blot from '../../images/blot.png';
import styles from './order-details.module.css';
import PropTypes from 'prop-types';

export default function OrderDetails({number}) {
  return (
    <div className={styles.orderDetails}>
      <h3 className={`${styles.price} text text_type_digits-large`}>{number}</h3>
      <p className={`${styles.id} text text_type_main-medium`}>идентификатор заказа</p>
      <img className={styles.blot} src={blot} alt="заказ подтверждён" />
      <p className={`${styles.prepare} text text_type_main-default`}>Ваш заказ начали готовить</p>
      <p className={`${styles.awayt} text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

OrderDetails.propTypes = {
  orderDetails: PropTypes.object.isRequired
}