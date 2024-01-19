import styles from './orders-lifetime.module.css';

export const OrdersLifetime = () => {
  const done = ['034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534'];
  const inProgress = ['034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534', '034534'];
  const lifetime = '550 777';
  const today = '555';

  return (
    <div className={styles.ordersLifetime}>
      <div className={styles.statesContainer}>
        <div className={styles.stateContainer}>
          <p className='text text_type_main-medium'>Готовы:</p>

          <ul className={styles.orders}>
            {done.map((number, idx) => {
              return idx < 10 && <li key={idx}><p className={`${styles.done} text text_type_digits-default`}>{number}</p></li>
            })}
          </ul>
        </div>
        <div className={styles.stateContainer}>
          <p className='text text_type_main-medium'>В работе:</p>
          <ul className={styles.orders}>
            {inProgress.map((number, idx) => {
              return idx < 10 && <li key={idx}><p className='text text_type_digits-default'>{number}</p></li>
            })}
          </ul>
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