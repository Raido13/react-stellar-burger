import styles from './burger-ingridients-type.module.css';
import {BurgerIngridient} from '../burger-ingridient/burger-ingridient';
import {type FC} from 'react';
import { TIngridient } from '../../services/types';

export const BurgerIngridientsType: FC<{ingridients : TIngridient[]; ingridientsType : string; id: number}> = ({ingridients, ingridientsType, id}) => {
  const text = ingridientsType === 'bun'
                  ? 'Булка'
                  : ingridientsType === 'sauce'
                      ? 'Соус'
                      : 'Начинки';
  return (
    <div className={styles.burgerIngridientsType} data-id={id}>
      <h2 className={`${styles.title} text text_type_main-medium`}>{text}</h2>
      <div className={styles.container}>
        {ingridients.map(ingridient => <BurgerIngridient ingridient={ingridient} key={ingridient._id}/>)}
      </div>
    </div>
  )
}