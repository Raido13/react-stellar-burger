import styles from './burger-ingridient.module.css';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ingredientTypes} from '../../utils/types';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_INGRIDIENT_TO_CART, SET_TOTAL_PRICE, GET_COUNTER } from '../../services/actions/constructor-ingridients';
import { useDrag } from 'react-dnd';
import { useLocation, Link } from 'react-router-dom';
import { selectorConstructorIngridients } from '../../services/selectors';

export default function BurgerIngridient({ingridient}) {
  const dispatch = useDispatch();
  const location = useLocation();
  const {image, name, price, _id} = ingridient;
  const {counter, bun} = useSelector(selectorConstructorIngridients);
  const [{opacity}, DragRef] = useDrag({
    type: 'ingridients',
    item: ingridient,
    collect: monitor => ({
      opacity: monitor.isDragging() ? .5 : 1
    })
  })

  const handleEvents = ingridient => {
    dispatch({type: ADD_INGRIDIENT_TO_CART, ingridient});
    dispatch({type: GET_COUNTER, ingridient, bun});
    dispatch({type: SET_TOTAL_PRICE});
  }

  return (
    <div className={styles.burgerIngridient} onClick={() => handleEvents(ingridient)} style={{opacity}} ref={DragRef}>
      <Link className={styles.link} to={`ingridients/${_id}`} state={{ingridientPage: location}} >
        {counter[_id] > 0 && <Counter count={counter[_id]} size="default" extraClass="m-1" />}
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.price}><p className={`text text_type_digits-default`}>{price}</p><CurrencyIcon type="primary" /></div>
        <p className={`${styles.name} text text_type_main-default`}>{name}</p>
      </Link>
    </div>
  )
}

BurgerIngridient.propTypes = {
  ingridient: ingredientTypes.isRequired
}