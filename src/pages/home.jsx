import Menu from '../components/menu/menu';
import Cart from '../components/cart/cart';
import styles from './home.module.css';
import IngridientDetails from '../components/Ingridient-details/Ingridient-details';
import OrderDetails from '../components/order-details/order-details';
import Modal from '../components/modal/modal';
import { useSelector } from 'react-redux';

export const Home = () => {
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