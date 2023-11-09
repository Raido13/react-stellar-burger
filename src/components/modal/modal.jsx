import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
const modalRoot = document.getElementById('react-modals');

export default function Modal({closeModal, children, onClick}) {
  const closeByEscape = e => {
    e.key === 'Escape' && closeModal();
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
      <button className={styles.close} onClick={closeModal}><CloseIcon /></button>
      {children}
    </div>
    <ModalOverlay closeModal={closeModal}/>
    </div>,
    modalRoot
  )
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired
}