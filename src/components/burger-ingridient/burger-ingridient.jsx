import styles from './burger-ingridient.module.css';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';

export default function BurgerIngridient(props) {
  const {ingridient} = props;
  const { _id, image, name, price } = ingridient;
  const [hidden, setHidden] = useState(true);
  const count = undefined;

  function counterVisibility() {
    setHidden(!hidden);
  }
  
  return (
    <div key={_id} className={styles.burgerIngridient}>
      {!hidden && <Counter count={count} size="default" extraClass="m-1" />}
      <img className={styles.image} src={image} alt={name} onClick={counterVisibility} />
      <div className={styles.price}><p className={`text text_type_digits-default`}>{price}</p><CurrencyIcon type="primary" /></div>
      <p className={`${styles.name} text text_type_main-default`}>{name}</p>
    </div>
  )
}