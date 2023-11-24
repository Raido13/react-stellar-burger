import styles from './burger-constructor.module.css';
import {Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorIngridients from '../constructor-ingridients/constructor-ingridietns';
import PropTypes from 'prop-types';
import {ingredientTypes} from '../../utils/types';

export default function BurgerConstructor(props) {
  const {data, bun, openModal} = props;
  const buns = bun === null ? 0 : bun.price * 2;
  const total = data.map(ingridient => {return ingridient.price});
  const totalPrice = (total.reduce((a, b) => a + b, 0) + buns);
  
  
  return (
    <div className={styles.burgerConstructor}>
      <ConstructorIngridients {...props} />
      <div className={styles.container}>
        <div className={styles.total}>
          <p className='text text_type_digits-medium'>{totalPrice}</p>
          <div className={styles.icon}><CurrencyIcon type="primary" /></div>
        </div>
        <Button htmlType="button" onClick={openModal} type="primary" extraClass={styles.button} size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientTypes.isRequired).isRequired,
  bun: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ]),
  openModal: PropTypes.func.isRequired
}