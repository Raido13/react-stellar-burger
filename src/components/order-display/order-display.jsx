import styles from './order-display.module.css';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import { OrderInfo } from '../order-info/order-info';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrderInfo } from '../../services/actions/order-details';
import { selectorOrderDetails } from '../../services/selectors';

export const OrderDisplay = ({order}) => {
  const dispatch = useDispatch();
  const {orders, orderInfoRequest, orderInfoError} = useSelector(selectorOrderDetails);
  const {orderNumber} = useParams();
  
  useEffect(() => {
    !order && dispatch(getOrderInfo(orderNumber));
  }, [dispatch, orderNumber, order]);    

  return (
      <div className={styles.orderDisplay}>
        {(!orderInfoRequest && orderInfoError && <p className={`text text_type_digits-medium`}>Заказ не найден</p>)
        || (!order && !orderInfoRequest && !orderInfoError && orders.length !== 0 && <OrderInfo orderNumber={orderNumber} order={orders[0]} />)
        || (order && <OrderInfo orderNumber={orderNumber} order={order} />)
        }
      </div>
  )
}

OrderInfo.propTypes = {
  order: PropTypes.object
}