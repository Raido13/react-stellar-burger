import styles from './line-ingridient.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

export const LineIngridient = ({ingridient, counter}) => {
  // const location = useLocation();
  return (
    <li>
      <Link className={styles.lineIngridient} to={`/ingridients/${ingridient._id}`}>
        <div className={styles.imageContainer}><img className={styles.image} src={ingridient.image} alt={ingridient.name} /></div>
        <p className={`text text_type_main-default ${styles.name}`}>{ingridient.name}</p>
        <div className={styles.price}>
            <p className='text text_type_digits-default'>{counter} x {ingridient.price}</p>
            <CurrencyIcon type="primary" />
        </div>
      </Link>
    </li>
  )
}