import styles from './order-display.module.css';
import { useParams } from "react-router-dom";
import { OrderInfo } from '../order-info/order-info';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrderInfo } from '../../services/actions/order-details';
import { selectorOrderDetails, selectorWebsocket } from '../../services/selectors';
import { wsGetCommonOrders, wsConnectionStartCommon, wsConnectionCloseCommon, FIND_ORDER, FIND_ORDER_CLEAR } from '../../services/actions/websocket';
import { wsUrlCommon } from '../../utils/api';

export const OrderDisplay = () => {
  const dispatch = useDispatch();
  const {wsConnectCommon, commonOrders, foundOrder, findOrder} = useSelector(selectorWebsocket);
  const {orders} = useSelector(selectorOrderDetails);
  const {orderNumber} = useParams();

  useEffect(() => {
    wsConnectCommon
          ? dispatch(wsGetCommonOrders)
          : dispatch(wsConnectionStartCommon(wsUrlCommon));
    wsConnectCommon && commonOrders.length !== 0 && dispatch({type: FIND_ORDER, number: orderNumber});

    findOrder && foundOrder === null && dispatch(getOrderInfo(orderNumber));
    return () => {
      dispatch(wsConnectionCloseCommon);
      dispatch({type: FIND_ORDER_CLEAR})
    }
  }, [dispatch, orderNumber, wsConnectCommon, commonOrders, findOrder, foundOrder])
  
  return (
      <div className={styles.orderDisplay}>
        {wsConnectCommon && foundOrder !== null
              ? <OrderInfo orderNumber={orderNumber} order={foundOrder} />
              : findOrder && orders.length !== 0 && <OrderInfo orderNumber={orderNumber} order={orders[0]} />
        }
      </div>
  )
}