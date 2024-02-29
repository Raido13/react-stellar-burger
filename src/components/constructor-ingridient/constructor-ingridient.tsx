import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './constructor-ingridient.module.css';
import { useDispatch, useSelector } from '../../services/hooks';
import { GET_COUNTER, REMOVE_INGRIDIENT_FROM_CART, SET_TOTAL_PRICE, UPDATE_INGRIDIENT_POSITIONS } from '../../services/actions/constructor-ingridients';
import { useDrag, useDrop } from 'react-dnd/dist/hooks';
import { FC, useCallback, useRef } from 'react';
import { selectorConstructorIngridients } from '../../services/selectors';
import { TIngridientIdx, TIngridientUid } from '../../services/types';
import { DropTargetMonitor } from 'react-dnd';

export const ConstructorIngridient : FC<{ ingridient : TIngridientUid, id : number }> = ({ ingridient, id }) => {
  const ref = useRef<HTMLLIElement>(null);
  const dispatch = useDispatch();
  const { name, price, image, type } = ingridient;
  const { ingridients } = useSelector(selectorConstructorIngridients);

  const moveIngridient = useCallback((dragId : number, hoverId : number) => {
    ingridients.splice(hoverId, 0, ...ingridients.splice(dragId, 1));
    dispatch({
      type: UPDATE_INGRIDIENT_POSITIONS,
      ingridients: ingridients
    })
  }, [ingridients, dispatch])
  
  const [, drag] = useDrag({
    type: 'move',
    item: {ingridient, id},
  })

  const [{ handlerId }, drop] = useDrop({
    accept: 'move',
    collect: monitor => ({
      handlerId: monitor.getHandlerId()
    }),
    hover(item : unknown, monitor : DropTargetMonitor) {
      const ingridient = item as TIngridientIdx;
      if(!ref.current) {
        return
      }

      const dragId = ingridient.id;
      const hoverId = id;

      if(dragId === hoverId) {
        return
      }

      const hoverBoundingReact = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingReact.bottom - hoverBoundingReact.top) / 2;
      const clientOffset = monitor.getClientOffset();
    
      const hoverClientY = clientOffset ? clientOffset.y - hoverBoundingReact.top : 0;
      
      if((dragId < hoverId && hoverClientY < hoverMiddleY) || (dragId > hoverId && hoverClientY > hoverMiddleY)) {
        return
      }

      moveIngridient(dragId, hoverId);
      ingridient.id = hoverId
    }

  })

  drag(drop(ref));

  const handleEvents = () => {
    dispatch({type: REMOVE_INGRIDIENT_FROM_CART, ingridient});
    dispatch({type: GET_COUNTER, ingridient})
    dispatch({type: SET_TOTAL_PRICE})
  }

  return (
    <>
      {type !== 'bun' &&
        <li className={styles.constructorIngridient} ref={ref} data-handler-id={handlerId}>
          <DragIcon type="primary" />
          <ConstructorElement
            key={id}
            text={name}
            price={price}
            thumbnail={image}
            handleClose={() => handleEvents()}
          />
        </li>
      }
    </>
  )
}