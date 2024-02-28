import styles from './burger-ingridients.module.css';
import {BurgerIngridientsType} from '../burger-ingridients-type/burger-ingridients-type';
import { useSelector, useDispatch } from '../../services/hooks';
import { MutableRefObject, useEffect, useRef } from 'react';
import { SET_PARENT, SWITCH_TAB } from '../../services/actions/event-handler';
import { useIntersection } from '../../hooks/useIntersection';
import { selectorBurgerIngridients } from '../../services/selectors';
import { TIngridient } from '../../services/types';

export const BurgerIngridients = () => {
  const dispatch = useDispatch();
  let sortedData: [] | TIngridient[][] = [];
  const {burgerIngridients} = useSelector(selectorBurgerIngridients);
  const parentRef : MutableRefObject<HTMLDivElement | null> = useRef(null);
  const currentView = useIntersection(parentRef);
  useEffect(() => {
    dispatch({type: SET_PARENT, parent: parentRef});
    dispatch({type: SWITCH_TAB, tab: currentView})
  }, [currentView, dispatch]);

  const sliceArrayByType = (arr: TIngridient[], type: string) : TIngridient[] => arr.filter(ingridient => ingridient.type === type);

  if(burgerIngridients.length !== null) {
    sortedData = [sliceArrayByType(burgerIngridients, 'bun'), sliceArrayByType(burgerIngridients, 'sauce'), sliceArrayByType(burgerIngridients, 'main')];
  }

  return (
    sortedData &&
      <div className={`${styles.burgerIngridients} custom-scroll`} ref={parentRef} >
        {sortedData.map((ingridients: TIngridient[], index) => {
          return (
            <BurgerIngridientsType ingridients={ingridients} ingridientsType={ingridients[0].type} key={index} id={index}/>
          )
        })}
      </div>
  )
}