import Menu from '../menu/menu';
import Cart from '../cart/cart';
import styles from './main.module.css';
import IngridientDetails from '../Ingridient-details/Ingridient-details';
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
import { useSelector } from 'react-redux';

export default function Main() {
  const {modal} = useSelector(store => store.eventHandler);
  const content = () => {
    return modal === 'ingridient'
              ? <Modal><IngridientDetails /></Modal>
              : <Modal><OrderDetails /></Modal>
  }
  return (
    <main className={styles.main}>
      <Menu />
      <Cart />
      {modal && content()}
    </main>
  ) 
}