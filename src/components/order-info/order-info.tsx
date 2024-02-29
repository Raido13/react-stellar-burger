import styles from './order-info.module.css';
import { Line } from '../line/line';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../services/hooks';
import { selectorBurgerIngridients } from '../../services/selectors';
import { FC } from 'react';
import { TIngridient, TIngridientCount, TOrder } from '../../services/types';

export const OrderInfo : FC<{ order : TOrder, updateTitle : string | undefined }> = ({ updateTitle, order }) => {
  const {burgerIngridients} = useSelector(selectorBurgerIngridients);
  const {status, ingredients: ingridientsIDs, name: orderName, createdAt, number} = order;
  const orderDate = new Date(createdAt);

  const ingridients = ingridientsIDs.reduce((acc : TIngridient[], id : string) => {
    const foundIngridient = burgerIngridients.find(({_id}) => id === _id);
    return foundIngridient
          ? [...acc, foundIngridient]
          : acc
  }, []);

  const orderPrice = ingridients.reduce((totalPrice, {price}) => {return totalPrice + price}, 0);
  const orderCompound = 'Состав:';

  const filtredIngridients = ingridients.reduce((acc : TIngridientCount[], item : TIngridient) => {
    if(!acc.some(({_id}) => _id === item._id)) {
      return [...acc, {...item, counter: ingridients.filter(({_id}) => _id === item._id).length}]
    }
    return acc;
  }, []);

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
      <p className={`text text_type_digits-default ${updateTitle ? styles.orderNumber2 : styles.orderNumber}`}>#{number}</p>
      <div className={styles.orderOverview}>
        <p className="text text_type_main-medium">{orderName}</p>
        <p className={`text text_type_main-default ${styles[`${status}`]}`}>{orderStatus()}</p>
      </div>
      <p className={`text text_type_main-medium ${styles.orderCompound}`}>{orderCompound}</p>
      <Line type={'orderInfo'} ingridients={filtredIngridients}></Line>
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