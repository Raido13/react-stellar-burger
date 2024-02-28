import { selectorBurgerIngridients } from '../../services/selectors';
import styles from './ingridient-details.module.css';
import { useSelector } from '../../services/hooks';
import { useParams } from "react-router-dom";
import { FC } from 'react';

export const IngridientDetails: FC<{updateTitle : string | undefined}> = ({updateTitle}) : any => {
  const {burgerIngridients} = useSelector(selectorBurgerIngridients);
  const {id} = useParams();
  
  const ingridient = burgerIngridients.find(({_id}) => _id === id);
  
  return (
    ingridient !== undefined &&
      <div className={styles.ingridientDetails}>
        <h3 className={`${!!updateTitle ? styles.title2 : styles.title} text text_type_main-large`}>Детали ингридиента</h3>
        <img className={`${styles.img}`} src={ingridient.image_large} alt={ingridient.name} />
        <p className={`${styles.name} text text_type_main-medium`}>{ingridient.name}</p>
        <ul className={`${styles.list}`}>
          <li className={`${styles.item}`}>
            <p className={`${styles.paragraph} text_type_main-default`}>Калории,ккал</p>
            <p className={`${styles.paragraph} text_type_digits-default`}>{ingridient.calories}</p>
          </li>
          <li className={`${styles.item}`}>
            <p className={`${styles.paragraph} text_type_main-default`}>Белки, г</p>
            <p className={`${styles.paragraph} text_type_digits-default`}>{ingridient.proteins}</p>
          </li>
          <li className={`${styles.item}`}>
            <p className={`${styles.paragraph} text_type_main-default`}>Жиры, г</p>
            <p className={`${styles.paragraph} text_type_digits-default`}>{ingridient.fat}</p>
          </li>
          <li className={`${styles.item}`}>
            <p className={`${styles.paragraph} text_type_main-default`}>Углеводы, г</p>
            <p className={`${styles.paragraph} text_type_digits-default`}>{ingridient.carbohydrates}</p>
          </li>
        </ul>
      </div>
  )
}