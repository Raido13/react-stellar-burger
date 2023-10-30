import styles from './ingridient.module.css';
import {Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import icon from '../../images/currency-icon@2x.png'

export default function Ingridient(props) {
  const { _id, image, name, price } = props;
  const currency = 'штук';
  const [hidden, setHidden] = useState(true);
  const count = undefined;

  function counterVisibility() {
    setHidden(!hidden);
  }
  return (
    <div key={_id} className={styles.ingridient}>
      {!hidden && <Counter count={count} size="default" extraClass="m-1" />}
      <img className={styles.image} src={image} alt={name} onClick={counterVisibility} />
      <div className={styles.price}><p className={`text text_type_digits-default`}>{price}</p><img src={icon} className={styles.icon} alt={`${price} ${currency}`} /></div>
      <p className={`${styles.name} text text_type_main-default`}>{name}</p>
    </div>
  )
}