import styles from './burger-constructor.module.css';
import {Button} from '@ya.praktikum/react-developer-burger-ui-components'
import icon from '../../images/currency-icon@2x.png';
import ConstructorList from '../constructor-list/constructor-list';

export default function BurgerConstructor() {
  const total = 610;
  const currency = 'штук';
  return (
    <div className={styles.burgerConstructor}>
      <ConstructorList />
      <div className={styles.container}>
        <div className={styles.total}>
          <p className='text text_type_digits-medium'>{total}</p>
          <img src={icon} alt={currency} className={styles.icon} />
        </div>
        <Button htmlType="button" type="primary" extraClass={styles.button} size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}