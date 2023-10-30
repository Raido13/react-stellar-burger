import Menu from '../menu/menu';
import Cart from '../cart/cart';
import styles from './main.module.css';

export default function Main() {
  return (
    <main className={styles.main}>
      <Menu />
      <Cart />
    </main>
  ) 
}