import styles from './order-display.module.css';
import { useParams } from "react-router-dom";
import { OrderInfo } from '../order-info/order-info';
import { useDispatch, useSelector } from '../../services/hooks';
import { FC, useEffect, useMemo } from 'react';
import { getOrderInfo } from '../../services/actions/order-details';
import { selectorOrderDetails } from '../../services/selectors';
import { TOrder } from '../../services/types';

export const OrderDisplay: FC<{order: TOrder | undefined}> = ({order}) => {
  const dispatch = useDispatch();
  const {orders, orderInfoRequest, orderInfoError} = useSelector(selectorOrderDetails);
  const {orderNumber} = useParams();
  
  useEffect(() => {
    !order && dispatch(getOrderInfo(orderNumber));
  }, [dispatch, orderNumber, order]);    

  const wsOrder = useMemo(() => order, [order]);
  const apiOrder: null | TOrder = useMemo(() => orders && orders[0], [orders]);

  return (
      <div className={styles.orderDisplay}>
        {(!orderInfoRequest && orderInfoError && <p className={`text text_type_digits-medium`}>Заказ не найден</p>)
        || (!wsOrder && !orderInfoRequest && !orderInfoError && apiOrder && <OrderInfo order={apiOrder} updateTitle={undefined} />)
        || (wsOrder && <OrderInfo order={wsOrder} updateTitle={undefined} />)
        }
      </div>
  )
}