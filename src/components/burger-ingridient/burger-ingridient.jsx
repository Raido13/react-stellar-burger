import styles from './burger-ingridient.module.css';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerIngridient(props) {
  const {ingridient, addIngridient, getCounter} = props;
  const { image, name, price} = ingridient;
  const counter = getCounter(ingridient);

  return (
    <div className={styles.burgerIngridient} onClick={() => addIngridient(ingridient)} >
      {counter > 0 && <Counter count={counter} size="default" extraClass="m-1" />}
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.price}><p className={`text text_type_digits-default`}>{price}</p><CurrencyIcon type="primary" /></div>
      <p className={`${styles.name} text text_type_main-default`}>{name}</p>
    </div>
  )
}