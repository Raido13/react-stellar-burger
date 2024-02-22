import styles from './burger-ingridients.module.css';
import {BurgerIngridientsType} from '../burger-ingridients-type/burger-ingridients-type';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { SET_PARENT, SWITCH_TAB } from '../../services/actions/event-handler';
import { useIntersection } from '../../hooks/useIntersection';
import { selectorBurgerIngridients } from '../../services/selectors';

export default function BurgerIngridients() {
  const dispatch = useDispatch();
  const sortedData = [[], [], []];
  const {burgerIngridients} = useSelector(selectorBurgerIngridients);
  const parentRef = useRef(null);
  const currentView = useIntersection(parentRef);
  useEffect(() => {
    dispatch({type: SET_PARENT, parent: parentRef});
    dispatch({type: SWITCH_TAB, tab: currentView})
  }, [currentView, dispatch]);

  burgerIngridients.map(ingridients => {
    return ingridients.type === 'bun'
                    ? sortedData[[0]].push(ingridients)
                    : ingridients.type === 'sauce'
                        ? sortedData[[1]].push(ingridients)
                        : sortedData[[2]].push(ingridients)
  });

  return (
    <div className={`${styles.burgerIngridients} custom-scroll`} ref={parentRef} >
      {sortedData.map((ingridients, index) => {
        return (
          <BurgerIngridientsType ingridients={ingridients} ingridientsType={ingridients[0].type} key={index} id={index}/>
        )
      })}
    </div>
  )
}