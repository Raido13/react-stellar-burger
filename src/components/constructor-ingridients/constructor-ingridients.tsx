import styles from './constructor-ingridients.module.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorList from '../constructor-list/constructor-list';
import bunThumbnail from '../../images/thumbnail.png';
import { useSelector, useDispatch } from '../../services/hooks';
import { useDrop } from 'react-dnd';
import { ADD_INGRIDIENT_TO_CART, GET_COUNTER, SET_TOTAL_PRICE } from '../../services/actions/constructor-ingridients';
import { selectorConstructorIngridients } from '../../services/selectors';
import {v4 as uuidv4} from 'uuid';
import { TIngridient } from '../../services/types';

export default function ConstructorIngridients() {
  const dispatch = useDispatch();
  const {bun} = useSelector(selectorConstructorIngridients);
  const [{isHover}, dropTarget] = useDrop({
    accept: 'ingridients',
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop(item : unknown) {
      const ingridient = item as TIngridient;
      dispatch({type: ADD_INGRIDIENT_TO_CART, ingridient: {...ingridient, elemID: uuidv4()}});
      dispatch({type: GET_COUNTER, ingridient, bun});
      dispatch({type: SET_TOTAL_PRICE})
    }
  })

  return (
    <div className={`${styles.constructorIngridients} ${isHover ? styles.onHover : ''}`} ref={dropTarget}>
      {bun !== null
        ? <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
            extraClass={styles.margin}
          />
        : <ConstructorElement
            type="top"
            isLocked={true}
            text={'Добавьте булку'}
            price={0}
            thumbnail={bunThumbnail}
            extraClass={styles.margin}
          />
      }

      <ConstructorList />

      {bun !== null
        ? <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
            extraClass={`${styles.margin} ${styles.inverse}`}
          />
        : <ConstructorElement
            type="bottom"
            isLocked={true}
            text={'Добавьте булку'}
            price={0}
            thumbnail={bunThumbnail}
            extraClass={`${styles.margin} ${styles.inverse}`}
          />
      }
    </div>
  )
}