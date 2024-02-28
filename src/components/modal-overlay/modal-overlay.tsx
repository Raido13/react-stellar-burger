import { FC } from 'react';
import styles from './modal-overlay.module.css';

export const ModalOverlay: FC<{closeModal: () => void}> = ({closeModal}) => {
  return(
    <div className={styles.modalOverlay} onClick={closeModal}>
    </div>
  )
}