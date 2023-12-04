import styles from './burger-ingridients.module.css';
import BurgerIngridientsType from '../burger-ingridients-type/burger-ingridients-type';
import { useSelector } from 'react-redux';

export default function BurgerIngridients() {
  const tab = useSelector(store => store.eventHandler.tab);
  const sortedData = [[], [], []];
  const {burgerIngridients} = useSelector(store => store.burgerIngridients)

  burgerIngridients.map(ingridient => {
    return tab === 'one'
                ? ingridient.type === 'bun'
                    ? sortedData[[0]].push(ingridient)
                    : ingridient.type === 'sauce'
                        ? sortedData[[1]].push(ingridient)
                        : sortedData[[2]].push(ingridient)
                : tab === 'two'
                    ? ingridient.type === 'sauce'
                        ? sortedData[[0]].push(ingridient)
                        : ingridient.type === 'main'
                            ? sortedData[[1]].push(ingridient)
                            : sortedData[[2]].push(ingridient)
                    : ingridient.type === 'main'
                            ? sortedData[[0]].push(ingridient)
                            : ingridient.type === 'bun'
                                ? sortedData[[1]].push(ingridient)
                                : sortedData[[2]].push(ingridient)
  });

  return (
    <div className={`${styles.burgerIngridients} custom-scroll`}>
      {sortedData.map((ingridients, index) => {
        return (
          <BurgerIngridientsType ingridients={ingridients} ingridientsType={ingridients[0].type} key={index}/>
        )
      })}
    </div>
  )
}