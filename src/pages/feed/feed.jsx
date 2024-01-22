import styles from './feed.module.css';
import Title from '../../components/title/title';
import { Line } from '../../components/line/line';
import { OrdersLifetime } from '../../components/orders-lifetime/orders-lifetime';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectorWebsocket } from '../../services/selectors';
import { WS_CONNECTION_CLOSED_COMMON, WS_CONNECTION_START_COMMON, wsGetCommonOrders } from '../../services/actions/websocket';
import { useEffect } from 'react';
import { wsUrlCommon } from '../../utils/api';

export const Feed = () => {
  const dispatch = useDispatch();
  const {commonOrders, wsConnectCommon} = useSelector(selectorWebsocket);

  useEffect(() => {
    wsConnectCommon
          ? dispatch(wsGetCommonOrders)
          : dispatch({type: WS_CONNECTION_START_COMMON, payload: wsUrlCommon});
    return () => {
      dispatch({type: WS_CONNECTION_CLOSED_COMMON})
    }
  }, [dispatch, wsConnectCommon])

  return (
    <div className={styles.feed}>
      <Title text={'Лента заказов'} />
      <div className={styles.container}>
        <Line type={'lineFeed'} orders={commonOrders} />
        <OrdersLifetime />
        <Outlet />
      </div>
    </div>
  )
}