import Modal from '../modal/modal';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import { OrderInfo } from '../order-info/order-info';
import { useSelector } from 'react-redux';
import { selectorWebsocket } from '../../services/selectors';

export const OrderPreview = ({navCloseModal}) => {
  const {orderNumber} = useParams();
  const {profileOrders} = useSelector(selectorWebsocket);

  return (
    <Modal navCloseModal={navCloseModal}><OrderInfo orderNumber={orderNumber} orders={profileOrders} updateTitle={'YES'} /></Modal>
  )
}