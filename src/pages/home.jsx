import Menu from '../components/menu/menu';
import Cart from '../components/cart/cart';
import styles from './home.module.css';
import OrderDetails from '../components/order-details/order-details';
import Modal from '../components/modal/modal';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { selectorEventHandler } from '../services/selectors';

export const Home = () => {
  const {modal} = useSelector(selectorEventHandler);
  const location = useLocation();

  return (
    <main className={styles.main}>
      <Menu />
      <Cart />
      {location.state?.ingridientPage && <Outlet />}
      {modal && <Modal><OrderDetails /></Modal>}
    </main>
  ) 
}