import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { useDispatch } from 'react-redux';
import {CLOSE_MODAL} from '../../services/actions/event-handler';
import { REMOVE_INGRIDIENT_DETAILS } from '../../services/actions/ingridient-details';
const modalRoot = document.getElementById('react-modals');

export default function Modal({children, navCloseModal}) {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({type: CLOSE_MODAL})
  }

  const closeByEscape = e => {
    e.key === 'Escape' && navCloseModal !== undefined ? navCloseModal() : closeModal();
    dispatch({type: REMOVE_INGRIDIENT_DETAILS});
  }

  useEffect(() => {
    window.addEventListener('keydown', closeByEscape)

    return () => {
      window.removeEventListener('keydown', closeByEscape)
    }
  })

  return createPortal(
    <div className={styles.modal}>
    <div className={styles.modalContainer}>
      <button className={styles.close} onClick={navCloseModal !== undefined ? navCloseModal : closeModal}><CloseIcon /></button>
      {children}
    </div>
    <ModalOverlay closeModal={navCloseModal !== undefined ? navCloseModal : closeModal}/>
    </div>,
    modalRoot
  )
}

Modal.propTypes = {
  children: PropTypes.object.isRequired
}