import styles from './burger-ingridients-type.module.css';
import BurgerIngridient from '../burger-ingridient/burger-ingridient';
import PropTypes from 'prop-types';
import {ingredientTypes} from '../../utils/types';

export default function BurgerIngridientsType(props) {
  const {sortedData, ingridientsType} = props;
  const text = ingridientsType === 'bun'
                  ? 'Булка'
                  : ingridientsType === 'sauce'
                      ? 'Соус'
                      : 'Начинки'
  return (
    <div className={styles.burgerIngridientsType}>
      <h2 className={`${styles.title} text text_type_main-medium`}>{text}</h2>
      <div className={styles.container}>
        {sortedData.map(dept => <BurgerIngridient ingridient={dept} key={dept._id} {...props} />)}
      </div>
    </div>
  )
}

BurgerIngridientsType.propTypes = {
  sortedData: PropTypes.arrayOf(ingredientTypes.isRequired).isRequired,
  ingridientsType: PropTypes.string.isRequired
}