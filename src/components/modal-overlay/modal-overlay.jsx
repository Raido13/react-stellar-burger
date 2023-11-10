import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

export default function ModalOverlay({closeModal}) {
  return(
    <div className={styles.modalOverlay} onClick={closeModal}>
    </div>
  )
}

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired
}