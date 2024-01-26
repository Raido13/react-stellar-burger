import Modal from '../modal/modal';
import PropTypes from 'prop-types';
import { useLocation, useParams } from "react-router-dom";
import { OrderInfo } from '../order-info/order-info';
import { useSelector } from 'react-redux';
import { selectorWebsocket } from '../../services/selectors';
import { OrderDisplay } from '../order-display/order-display';
import { useMemo } from 'react';

export const OrderPreview = ({navCloseModal}) => {
  const location = useLocation();
  const {orderNumber} = useParams();
  const {profileOrders} = useSelector(selectorWebsocket);
  const order = useMemo(() => profileOrders.find(({number}) => number === +orderNumber), [profileOrders, orderNumber]);

  return (
    <>
      {location.state?.preview
        ? order && <Modal navCloseModal={navCloseModal}><OrderInfo orderNumber={orderNumber} order={order} updateTitle={'YES'} /></Modal>
        : <OrderDisplay order={order} />
      }
    </>
  )
}

OrderPreview.propTypes = {
  navCloseModal: PropTypes.func
}