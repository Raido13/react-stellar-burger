import styles from './burger-ingridients.module.css';
import BurgerIngridientsType from '../burger-ingridients-type/burger-ingridients-type';
import PropTypes from 'prop-types';
import {ingredientTypes} from '../../utils/types';

export default function BurgerIngridients(props) {
  const {data, tab} = props;
  const sortedData = [[], [], []];

    data.map(item => {
      return tab === 'one'
                  ? item.type === 'bun'
                      ? sortedData[[0]].push(item)
                      : item.type === 'sauce'
                          ? sortedData[[1]].push(item)
                          : sortedData[[2]].push(item)
                  : tab === 'two'
                      ? item.type === 'sauce'
                          ? sortedData[[0]].push(item)
                          : item.type === 'main'
                              ? sortedData[[1]].push(item)
                              : sortedData[[2]].push(item)
                      : item.type === 'main'
                              ? sortedData[[0]].push(item)
                              : item.type === 'bun'
                                  ? sortedData[[1]].push(item)
                                  : sortedData[[2]].push(item)
    });

  return (
    <div className={`${styles.burgerIngridients} custom-scroll`}>
      {sortedData.map((ingridients, index) => {
        return (
          <BurgerIngridientsType sortedData={ingridients} {...props} ingridientsType={ingridients[0].type} key={index}/>
        )
      })}
    </div>
  )
}

BurgerIngridients.propTypes = {
  data: PropTypes.arrayOf(ingredientTypes.isRequired).isRequired,
  tab: PropTypes.string.isRequired
}