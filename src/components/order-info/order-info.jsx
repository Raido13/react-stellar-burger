import styles from './order-info.module.css';
import { Line } from '../line/line';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { selectorBurgerIngridients } from '../../services/selectors';

export const OrderInfo = ({updateTitle, order, orderNumber}) => {
  console.log(order);
  const {burgerIngridients} = useSelector(selectorBurgerIngridients);
  const {status, ingredients: ingridientsIDs, name: orderName, createdAt} = order;
  const orderDate = new Date(createdAt);
  const ingridients = ingridientsIDs.map(id => burgerIngridients.find(({_id}) => id === _id));
  const orderPrice = ingridients.reduce((totalPrice, {price}) => {return totalPrice + price}, 0);
  const orderCompound = 'Состав:';

  const orderStatus = () => {
    switch(status) {
      case 'created': return 'Создан';
      case 'pending': return 'Готовится';
      case 'done': return 'Выполнен';
      default: return 'Статус заказа неизвествен';
    }
  }

  return (
    <div className={styles.orderInfo}>
      <p className={`text text_type_digits-default ${updateTitle ? styles.orderNumber2 : styles.orderNumber}`}>#{orderNumber}</p>
      <div className={styles.orderOverview}>
        <p className="text text_type_main-medium">{orderName}</p>
        <p className={`text text_type_main-default ${styles[`${status}`]}`}>{orderStatus()}</p>
      </div>
      <p className={`text text_type_main-medium ${styles.orderCompound}`}>{orderCompound}</p>
      <Line type={'orderInfo'} ingridients={ingridients}></Line>
      <div className={styles.dataContainer}>
        <FormattedDate className="text text_type_main-default text_color_inactive" date={orderDate} />
        <div className={styles.price}>
          <p className='text text_type_digits-default'>{orderPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  )
}