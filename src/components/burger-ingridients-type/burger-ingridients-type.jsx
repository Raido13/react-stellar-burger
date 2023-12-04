import styles from './burger-ingridients-type.module.css';
import BurgerIngridient from '../burger-ingridient/burger-ingridient';
import PropTypes from 'prop-types';
import {ingredientTypes} from '../../utils/types';

export default function BurgerIngridientsType(props) {
  const {ingridients, ingridientsType} = props;
  const text = ingridientsType === 'bun'
                  ? 'Булка'
                  : ingridientsType === 'sauce'
                      ? 'Соус'
                      : 'Начинки';
  return (
    <div className={styles.burgerIngridientsType}>
      <h2 className={`${styles.title} text text_type_main-medium`}>{text}</h2>
      <div className={styles.container}>
        {ingridients.map((ingridient, index) => <BurgerIngridient ingridient={ingridient} key={index}/>)}
      </div>
    </div>
  )
}

BurgerIngridientsType.propTypes = {
  ingridients: PropTypes.arrayOf(ingredientTypes.isRequired).isRequired,
  ingridientsType: PropTypes.string.isRequired
}