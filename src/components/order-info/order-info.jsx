export const orderInfo = ({orderStatus}) => {
  const orderNumber = '034534';
  const orderData = 'Сегодня, 13:20 i-GMT+3';
  const orderName = 'Test';
  const orderPrice = ingridients.reduce((totalPrice, {price}) => {return totalPrice + price}, 0);

  return (
    <div className={styles.orderInfo}>
      <p className={styles.orderNumber}>#{orderNumber}</p>
      <p className={styles.orderName}>{orderName}</p>
      <p className={`text text_type_main-default ${styles[`${orderStatus}`]}`}>{orderStatus}</p>
      <p className={styles.orderCharacteristics}>{orderCharacteristics}</p>
      <Line></Line>
      <div className={styles.dataContainer}>
        <p className={styles.orderData}>{orderData}</p>
        <div className={styles.price}>
          <p className='text text_type_digits-default'>{orderPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  )
}