import styles from './modal-overlay.module.css';
import Modal from '../modal/modal';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
const modalRoot = document.getElementById('react-modals');

export default function ModalOverlay(props) {
  const {closeModal} = props;
  const handlePropagation = e => {
    e.stopPropagation()
  }
  return createPortal(
    <div className={styles.modalOverlay} onClick={closeModal}>
      <Modal onClick={handlePropagation} {...props} />
    </div>,
    modalRoot
  )
}

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired
}