import styles from './order-display.module.css';
import { useParams } from "react-router-dom";
import { OrderInfo } from '../order-info/order-info';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrderInfo } from '../../services/actions/order-details';
import { selectorOrderDetails } from '../../services/selectors';

export const OrderDisplay = () => {
  const dispatch = useDispatch();
  const {orders} = useSelector(selectorOrderDetails);
  const {orderNumber} = useParams();
  
  useEffect(() => {
    dispatch(getOrderInfo(orderNumber));
  }, [dispatch, orderNumber])

  return (<>
    {orders.length &&
      <div className={styles.orderDisplay}>
        <OrderInfo orderNumber={orderNumber} orders={orders} />
      </div>
    }
</>
  )
}