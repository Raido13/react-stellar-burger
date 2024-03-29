import { IngridientMini } from '../ingridient-mini/ingridient-mini';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './line-order.module.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FC, useMemo } from 'react';
import { useSelector } from '../../services/hooks';
import { selectorBurgerIngridients } from '../../services/selectors';
import { TIngridient, TOrder } from '../../services/types';

export const LineOrder: FC<{order: TOrder, showStatus?: boolean}> = ({order, showStatus}) => { 
  const {ingredients: ingridientsIDs, status, createdAt, number: orderNumber, name: orderName} = order;
  const location = useLocation();
  const {burgerIngridients} = useSelector(selectorBurgerIngridients);
  
  const ingridients = ingridientsIDs.reduce((acc : TIngridient[], id : string) => {
    const foundIngridient = burgerIngridients.find(({_id}) => id === _id);
    return foundIngridient
          ? [...acc, foundIngridient]
          : acc
  }, []);

  const valid = ingridients.length > 2 && !!status && !!createdAt && !!orderNumber && !!orderName && ingridients.filter(({_id}) => [{'id': "643d69a5c3f7b9001cfa093c"}, {'id': "643d69a5c3f7b9001cfa093d"}].find(({id}) => id === _id)).length === 2
  const orderDate = new Date(createdAt);
  const orderPrice = ingridients.reduce((totalPrice, {price}) => {return totalPrice + price}, 0);
  const overSize = ingridients.length > 5 ? ingridients.length - 5 : undefined;
  const maxSize = 5;

  const orderStatus = useMemo(() => {
    switch(status) {
      case 'created': return 'Создан';
      case 'pending': return 'Готовится';
      case 'done': return 'Выполнен';
      default: return 'Статус заказа неизвествен';
    }
  }, [status])

  return (
    <>
      {valid &&
        <li>
          <Link className={styles.lineOrder} to={`${orderNumber}`} state={{preview: location}}>
            <div className={styles.orderInfo}>
              <p className='text text_type_digits-default'>#{orderNumber}</p>
              <FormattedDate className="text text_type_main-default text_color_inactive" date={orderDate} />
            </div>
            <div className={styles.orderOverview}>
              <p className={`${showStatus ? styles.name : styles.feedName} text text_type_main-medium`}>{orderName}</p>
              {showStatus && <p className={`text text_type_main-default ${styles[`${status}`]}`}>{orderStatus}</p>}
            </div>
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
          </Link>
        </li>
      }
    </>
  )
}