import styles from './cart.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor';

export default function Cart() {
  return(
    <div className={styles.cart}>
      <BurgerConstructor/>
    </div>
  )
}