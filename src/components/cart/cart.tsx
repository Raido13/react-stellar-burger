import styles from './cart.module.css';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';

export const Cart = () => {
  return(
    <div className={styles.cart}>
      <BurgerConstructor/>
    </div>
  )
}