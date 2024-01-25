import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './constructor-ingridient.module.css';
import PropTypes from 'prop-types';
import {ingredientTypes} from '../../utils/types';
import { useDispatch, useSelector } from 'react-redux';
import {GET_COUNTER, REMOVE_INGRIDIENT_FROM_CART, SET_TOTAL_PRICE, UPDATE_INGRIDIENT_POSITIONS} from '../../services/actions/constructor-ingridients';
import { useDrag, useDrop } from 'react-dnd/dist/hooks';
import { useCallback, useRef } from 'react';

export default function ConstructorIngridient({ingridient, id}) {
  const ref = useRef();
  const dispatch = useDispatch();
  const { name, price, image, type } = ingridient;
  const ingridients = useSelector(store => store.constructorIngridients.ingridients);

  const moveIngridient = useCallback((dragId, hoverId) => {
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

  const [{handlerId}, drop] = useDrop({
    accept: 'move',
    collect: monitor => ({
      handlerId: monitor.getHandlerId()
    }),
    hover(ingridient, monitor) {
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
      const hoverClientY = clientOffset.y - hoverBoundingReact.top;
      
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

ConstructorIngridient.propTypes = {
  ingridient: ingredientTypes.isRequired,
  id: PropTypes.number.isRequired
}