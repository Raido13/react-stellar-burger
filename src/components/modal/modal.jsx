import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

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

  return (
    <div className={styles.modal} onClick={onClick}>
      <button className={styles.close} onClick={closeModal}><CloseIcon /></button>
      {children}
    </div>
  )
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired
}