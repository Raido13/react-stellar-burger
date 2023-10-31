import styles from './burger-constructor.module.css';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorIngridients from '../constructor-ingridients/constructor-ingridietns';
import data from '../../utils/data';

export default function BurgerConstructor() {
  const total = data.map(ingridient =>{return ingridient.price});
  const totalPrice = total.reduce((a, b) => a + b, 0);
  return (
    <div className={styles.burgerConstructor}>
      <ConstructorIngridients />
      <div className={styles.container}>
        <div className={styles.total}>
          <p className='text text_type_digits-medium'>{totalPrice}</p>
          <div className={styles.icon}><CurrencyIcon type="primary" /></div>
        </div>
        <Button htmlType="button" type="primary" extraClass={styles.button} size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}