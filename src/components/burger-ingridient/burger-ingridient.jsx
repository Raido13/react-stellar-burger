import styles from './burger-ingridient.module.css';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {ingredientTypes} from '../../utils/types';

export default function BurgerIngridient(props) {
  const {ingridient, addIngridient, getCounter, openModal} = props;
  const {image, name, price} = ingridient;
  const counter = getCounter(ingridient);
  const handleEvents = ingridient => {
    addIngridient(ingridient)
    openModal(ingridient)
  }

  return (
    <div className={styles.burgerIngridient} onClick={() => handleEvents(ingridient)} >
      {counter > 0 && <Counter count={counter} size="default" extraClass="m-1" />}
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.price}><p className={`text text_type_digits-default`}>{price}</p><CurrencyIcon type="primary" /></div>
      <p className={`${styles.name} text text_type_main-default`}>{name}</p>
    </div>
  )
}

BurgerIngridient.propTypes = {
  ingridient: ingredientTypes.isRequired,
  addIngridient: PropTypes.func.isRequired,
  getCounter: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
}