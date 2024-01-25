import styles from './feed.module.css';
import Title from '../../components/title/title';
import { Line } from '../../components/line/line';
import { OrdersLifetime } from '../../components/orders-lifetime/orders-lifetime';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectorWebsocket } from '../../services/selectors';
import { wsGetCommonOrders, wsConnectionStartCommon, wsConnectionCloseCommon } from '../../services/actions/websocket';
import { useEffect } from 'react';
import { wsUrlCommon } from '../../utils/api';

export const Feed = () => {
  const dispatch = useDispatch();
  const {wsConnectCommon, commonOrders, totalOrders, totalToday} = useSelector(selectorWebsocket);

  useEffect(() => {
    wsConnectCommon
          ? dispatch(wsGetCommonOrders)
          : dispatch(wsConnectionStartCommon(wsUrlCommon));
    return () => {
      dispatch(wsConnectionCloseCommon)
    }
  }, [dispatch, wsConnectCommon])

  return (
    <div className={styles.feed}>
      <Title text={'Лента заказов'} />
      <div className={styles.container}>
          {wsConnectCommon && commonOrders.length !== 0 &&
            <>
              <Line orders={commonOrders} type={'lineFeed'} />
              <OrdersLifetime orders={commonOrders} totalOrders={totalOrders} totalToday={totalToday} />
            </>
          }
        <Outlet />
      </div>
    </div>
  )
}