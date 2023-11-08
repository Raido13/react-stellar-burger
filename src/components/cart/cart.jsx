import styles from './cart.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor';

export default function Cart(props) {
  return(
    <div className={styles.cart}>
      <BurgerConstructor {...props}/>
    </div>
  )
}