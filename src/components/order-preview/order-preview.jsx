import styles from './order-preview.module.css';
import Modal from '../modal/modal';
import PropTypes from 'prop-types';
import { useLocation, useParams } from "react-router-dom";
import { OrderInfo } from '../order-info/order-info';
import { useDispatch, useSelector } from 'react-redux';
import { selectorWebsocket } from '../../services/selectors';
import { useEffect } from 'react';
import { wsGetCommonOrders, wsConnectionStartCommon, wsConnectionCloseCommon } from '../../services/actions/websocket';
import { wsUrlCommon } from '../../utils/api';

export const OrderPreview = ({navCloseModal}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {orderNumber} = useParams();
  const {commonOrders, wsConnectCommon} = useSelector(selectorWebsocket);
  
  useEffect(() => {
    wsConnectCommon
          ? dispatch(wsGetCommonOrders)
          : dispatch(wsConnectionStartCommon(wsUrlCommon));
    return () => {
      dispatch(wsConnectionCloseCommon)
    }
  }, [dispatch, wsConnectCommon])

  return (
    <>
      {location.state?.orderPreview
          ? <Modal navCloseModal={navCloseModal}><OrderInfo orderNumber={orderNumber} orders={commonOrders} updateTitle={'YES'} /></Modal>
          :  wsConnectCommon && commonOrders.length !== 0 &&
            <div className={styles.orderPreview}>
              <OrderInfo orderNumber={orderNumber} orders={commonOrders} />
            </div>
      }
    </>
  )
}