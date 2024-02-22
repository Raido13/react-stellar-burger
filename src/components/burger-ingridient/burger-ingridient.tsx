import styles from './burger-ingridient.module.css';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../services/hooks';
import { useDrag } from 'react-dnd';
import { useLocation, Link } from 'react-router-dom';
import { selectorConstructorIngridients } from '../../services/selectors';
import {type FC} from 'react';
import { TIngridient } from '../../services/types';

export const BurgerIngridient: FC<{ingridient: TIngridient}> = ({ingridient}) => {
  const location = useLocation();
  const {image, name, price, _id} = ingridient;
  const {counter} = useSelector(selectorConstructorIngridients);

  const [{opacity}, DragRef] = useDrag({
    type: 'ingridients',
    item: ingridient,
    collect: monitor => ({
      opacity: monitor.isDragging() ? .5 : 1
    })
  });

  return (
    <div className={styles.burgerIngridient} style={{opacity}} ref={DragRef}>
      <Link className={styles.link} to={`ingridients/${_id}`} state={{ingridientPage: location}} >
        {counter != null && counter[_id] > 0 && <Counter count={counter[_id]} size="default" extraClass="m-1" />}
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.price}><p className={`text text_type_digits-default`}>{price}</p><CurrencyIcon type="primary" /></div>
        <p className={`${styles.name} text text_type_main-default`}>{name}</p>
      </Link>
    </div>
  )
}