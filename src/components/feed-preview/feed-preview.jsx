import Modal from '../modal/modal';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import { OrderInfo } from '../order-info/order-info';
import { useSelector } from 'react-redux';
import { selectorWebsocket } from '../../services/selectors';

export const FeedPreview = ({navCloseModal}) => {
  const {orderNumber} = useParams();
  const {commonOrders} = useSelector(selectorWebsocket);

  return (
    <Modal navCloseModal={navCloseModal}><OrderInfo orderNumber={orderNumber} orders={commonOrders} updateTitle={'YES'} /></Modal>
  )
}