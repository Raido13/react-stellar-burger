import styles from './orders-lifetime.module.css';

export const OrdersLifetime = () => {
  const done = ['1', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '11'];
  const inProgress = ['1', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '0'];
  const lifetime = '550 777';
  const today = '555';

  const columnsDone = `,`.repeat(Math.ceil(done.length / 10)).slice(0, -1).split(',').map((it, idx) => it = done.slice(+`${idx}0`, +`${idx + 1}0`));
  const columnsInProgress = `,`.repeat(Math.ceil(inProgress.length / 10)).slice(0, -1).split(',').map((it, idx) => it = inProgress.slice(+`${idx}0`, +`${idx + 1}0`));

  return (
    <div className={styles.ordersLifetime}>
      <div className={styles.statesContainer}>
        <div className={styles.stateContainer}>
          <p className='text text_type_main-medium'>Готовы:</p>
          {columnsDone.map((it, idx) => {
            return <ul key={idx} className={styles.orders}>
              {it.map((number, idx) => {
                return idx < 10 && <li key={idx}><p className={`${styles.done} text text_type_digits-default`}>{number}</p></li>
              })}
            </ul>
          })}
        </div>
        <div className={styles.stateContainer}>
          <p className='text text_type_main-medium'>В работе:</p>
          {columnsInProgress.map((it, idx) => {
            return <ul key={idx} className={styles.orders}>
              {it.map((number, idx) => {
                return idx < 10 && <li key={idx}><p className={`text text_type_digits-default`}>{number}</p></li>
              })}
            </ul>
          })}
        </div>
      </div>
      <div className={styles.lifetime}>
        <p className={`text text_type_main-medium`}>Выполнено за все время:</p>
        <p className={`text text_type_digits-large ${styles.digits}`}>{lifetime}</p>
      </div>
      <div className={styles.today}>
        <p className={`text text_type_main-medium`}>Выполнено за сегодня:</p>
        <p className={`text text_type_digits-large ${styles.digits}`}>{today}</p>
      </div>
    </div>
  )
}