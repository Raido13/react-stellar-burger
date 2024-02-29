import { Modal } from '../modal/modal';
import { useLocation, useParams } from "react-router-dom";
import { OrderInfo } from '../order-info/order-info';
import { useSelector } from '../../services/hooks';
import { selectorWebsocket } from '../../services/selectors';
import { OrderDisplay } from '../order-display/order-display';
import { FC, useMemo } from 'react';

export const OrderPreview : FC<{navCloseModal : () => void}> = ({navCloseModal}) => {
  const location = useLocation();
  const {orderNumber} = useParams();
  const {profileOrders} = useSelector(selectorWebsocket);

  const numberCondition = !!orderNumber && +orderNumber
  
  const order = useMemo(() => profileOrders.find(({number}) => number === numberCondition), [profileOrders, numberCondition]);

  return (
    <>
      {location.state?.preview
        ? order && <Modal navCloseModal={navCloseModal}><OrderInfo order={order} updateTitle={'YES'} /></Modal>
        : <OrderDisplay order={order} />
      }
    </>
  )
}