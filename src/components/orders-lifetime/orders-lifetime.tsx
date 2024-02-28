import { FC } from 'react';
import styles from './orders-lifetime.module.css';
import { TOrder } from '../../services/types';

export const OrdersLifetime : FC<{ orders: TOrder[], totalOrders: number | null, totalToday: number | null}> = ({orders, totalOrders, totalToday}) => {
  const sliceArrayByStatus = (arr: TOrder[], isDone: boolean): number[] => arr.reduce((acc: number[], order) => isDone ? order.status === 'done' ? [...acc, order.number] : acc : order.status !== 'done' ? [...acc, order.number] : acc, []);
  const chunkArray = (arr: number[], size: number) : number[][] => Array.from({length: Math.ceil(arr.length / size)}, (_, i) => arr.slice(i * size, i * size + size));
  const columnsDone = chunkArray(sliceArrayByStatus(orders, true), 10);
  const columnsInProgress = chunkArray(sliceArrayByStatus(orders, false), 10);

  return (
    <div className={styles.ordersLifetime}>
      <div className={styles.statesContainer}>
        <div className={styles.stateContainer}>
          <p className='text text_type_main-medium'>Готовы:</p>
          {columnsDone.map((column, idx) => {
            return idx < 2 && <ul key={idx} className={styles.orders}>
              {column.map((number, idx) => {
                return <li key={idx}><p className={`${styles.done} text text_type_digits-default`}>{number}</p></li>
              })}
            </ul>
          })}
        </div>
        <div className={styles.stateContainer}>
          <p className='text text_type_main-medium'>В работе:</p>
          {columnsInProgress.map((column, idx) => {
            return idx < 2 && <ul key={idx} className={styles.orders}>
              {column.map((number, idx) => {
                return <li key={idx}><p className={`text text_type_digits-default`}>{number}</p></li>
              })}
            </ul>
          })}
        </div>
      </div>
      <div className={styles.lifetime}>
        <p className={`text text_type_main-medium`}>Выполнено за все время:</p>
        <p className={`text text_type_digits-large ${styles.digits}`}>{totalOrders?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
      </div>
      <div className={styles.today}>
        <p className={`text text_type_main-medium`}>Выполнено за сегодня:</p>
        <p className={`text text_type_digits-large ${styles.digits}`}>{totalToday?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
      </div>
    </div>
  )
}