import { Modal } from '../modal/modal';
import { useLocation, useParams } from "react-router-dom";
import { OrderInfo } from '../order-info/order-info';
import { useSelector } from '../../services/hooks';
import { selectorWebsocket } from '../../services/selectors';
import { OrderDisplay } from '../order-display/order-display';
import { FC, useMemo } from 'react';

export const FeedPreview : FC<{navCloseModal: undefined | (() => void)}> = ({navCloseModal}) => {
  const location = useLocation();
  const {orderNumber} = useParams();
  const {commonOrders} = useSelector(selectorWebsocket);

  const numberCondition = !!orderNumber && +orderNumber

  const order = useMemo(() => commonOrders.find(({number}) => number === numberCondition), [commonOrders, numberCondition]);
  return (
    <>
      {location.state?.preview
            ? order && <Modal navCloseModal={navCloseModal}><OrderInfo order={order} updateTitle={'YES'} /></Modal>
            : <OrderDisplay order={order} />
      }
    </>
  )
}