import styles from './order-preview.module.css';
import Modal from '../modal/modal';
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { OrderInfo } from '../order-info/order-info';

export const OrderPreview = ({ingridients, orderStatus, navCloseModal}) => {
  const location = useLocation();
  return (
    <>
      {location.state?.orderPreview
          ? <Modal navCloseModal={navCloseModal}><OrderInfo ingridients={ingridients} updateTitle={'YES'} orderStatus={orderStatus} /></Modal>
          : <div className={styles.orderPreview}>
              <OrderInfo ingridients={ingridients} orderStatus={orderStatus} />
            </div>
      }
    </>
  )
}