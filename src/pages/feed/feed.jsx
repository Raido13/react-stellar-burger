import styles from './feed.module.css';
import Title from '../../components/title/title';
import { Line } from '../../components/line/line';
import { OrdersLifetime } from '../../components/orders-lifetime/orders-lifetime';
import { Outlet } from 'react-router-dom';

export const Feed = () => {
  return (
    <div className={styles.feed}>
      <Title text={'Лента заказов'} />
      <div className={styles.container}>
        <Line type={'lineFeed'} />
        <OrdersLifetime />
        <Outlet />
      </div>
    </div>
  )
}