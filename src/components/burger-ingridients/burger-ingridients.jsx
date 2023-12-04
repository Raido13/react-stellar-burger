import styles from './burger-ingridients.module.css';
import BurgerIngridientsType from '../burger-ingridients-type/burger-ingridients-type';
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { SWITCH_TAB } from '../../services/actions/event-handler';

export default function BurgerIngridients() {
  // const tab = useSelector(store => store.eventHandler.tab);
  const dispatch = useDispatch();
  const sortedData = [[], [], []];
  const {burgerIngridients} = useSelector(store => store.burgerIngridients);
  const [refBun, viewBun] = useInView({threshold: .2});
  const [refSauce, viewSauce] = useInView({threshold: .7});
  const [refMain, viewMain] = useInView({threshold: .9});
  const refs = [refBun, refSauce, refMain];

  useEffect(() => {
    viewBun && dispatch({type: SWITCH_TAB, tab: 'one'})
    viewSauce && dispatch({type: SWITCH_TAB, tab: 'two'})
    viewMain && dispatch({type: SWITCH_TAB, tab: 'three'})
  },[viewBun, viewSauce, viewMain])
  // burgerIngridients.map(ingridient => {
  //   return tab === 'one'
  //               ? ingridient.type === 'bun'
  //                   ? sortedData[[0]].push(ingridient)
  //                   : ingridient.type === 'sauce'
  //                       ? sortedData[[1]].push(ingridient)
  //                       : sortedData[[2]].push(ingridient)
  //               : tab === 'two'
  //                   ? ingridient.type === 'sauce'
  //                       ? sortedData[[0]].push(ingridient)
  //                       : ingridient.type === 'main'
  //                           ? sortedData[[1]].push(ingridient)
  //                           : sortedData[[2]].push(ingridient)
  //                   : ingridient.type === 'main'
  //                           ? sortedData[[0]].push(ingridient)
  //                           : ingridient.type === 'bun'
  //                               ? sortedData[[1]].push(ingridient)
  //                               : sortedData[[2]].push(ingridient)
  // });

  burgerIngridients.map(ingridients => {
    return ingridients.type === 'bun'
                    ? sortedData[[0]].push(ingridients)
                    : ingridients.type === 'sauce'
                        ? sortedData[[1]].push(ingridients)
                        : sortedData[[2]].push(ingridients)
  });

  return (
    <div className={`${styles.burgerIngridients} custom-scroll`}>
      {sortedData.map((ingridients, index) => {
        return (
          <BurgerIngridientsType ingridients={ingridients} ref={refs[index]} ingridientsType={ingridients[0].type} key={index}/>
        )
      })}
    </div>
  )
}