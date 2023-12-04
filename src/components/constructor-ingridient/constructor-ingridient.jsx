import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './constructor-ingridient.module.css';
import PropTypes from 'prop-types';
import {ingredientTypes} from '../../utils/types';
import { useDispatch } from 'react-redux';
import {REMOVE_INGRIDIENT_FROM_CART, SET_TOTAL_PRICE} from '../../services/actions/constructor-ingridients';

export default function ConstructorIngridient({ingridient, id}) {
  const dispatch = useDispatch();
  const { name, price, image, type } = ingridient;

  const handleEvents = () => {
    dispatch({type: REMOVE_INGRIDIENT_FROM_CART, ingridient: ingridient});
    dispatch({type: SET_TOTAL_PRICE})
  }

  return (
    <>
      {type !== 'bun' &&
        <li className={styles.constructorIngridient}>
          <DragIcon type="primary" />
          <ConstructorElement
            key={id}
            text={name}
            price={price}
            thumbnail={image}
            handleClose={() => handleEvents()}
          />
        </li>
      }
    </>
  )
}

ConstructorIngridient.propTypes = {
  ingridient: ingredientTypes.isRequired,
  id: PropTypes.number.isRequired
}