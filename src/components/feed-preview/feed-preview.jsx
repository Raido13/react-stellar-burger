import Modal from '../modal/modal';
import PropTypes from 'prop-types';
import { useLocation, useParams } from "react-router-dom";
import { OrderInfo } from '../order-info/order-info';
import { useSelector } from 'react-redux';
import { selectorWebsocket } from '../../services/selectors';
import { OrderDisplay } from '../order-display/order-display';

export const FeedPreview = ({navCloseModal}) => {
  const location = useLocation();
  const {orderNumber} = useParams();
  const {commonOrders} = useSelector(selectorWebsocket);
  const order = commonOrders.find(({number}) => number === +orderNumber);

  return (
    <>
      {location.state?.preview
            ? <Modal navCloseModal={navCloseModal}><OrderInfo orderNumber={orderNumber} order={order} updateTitle={'YES'} /></Modal>
            : <OrderDisplay order={order} />
      }
    </>
  )
}

FeedPreview.propTypes = {
  navCloseModal: PropTypes.func
}