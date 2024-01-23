import styles from './orders-lifetime.module.css';

export const OrdersLifetime = ({orders, totalOrders, totalToday}) => {
  const done = [];
  const inProgress = [];
  orders.forEach(order => order.status === 'done' ? done.push(order.number) : inProgress.push(order.number));

  const columnsDone = `,`.repeat(Math.ceil(done.length / 10)).slice(0, -1).split(',').map((it, idx) => it = done.slice(+`${idx}0`, +`${idx + 1}0`));
  const columnsInProgress = `,`.repeat(Math.ceil(inProgress.length / 10)).slice(0, -1).split(',').map((it, idx) => it = inProgress.slice(+`${idx}0`, +`${idx + 1}0`));

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
        <p className={`text text_type_digits-large ${styles.digits}`}>{totalOrders}</p>
      </div>
      <div className={styles.today}>
        <p className={`text text_type_main-medium`}>Выполнено за сегодня:</p>
        <p className={`text text_type_digits-large ${styles.digits}`}>{totalToday}</p>
      </div>
    </div>
  )
}