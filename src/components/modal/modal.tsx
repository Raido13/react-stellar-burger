import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { useDispatch } from '../../services/hooks';
import {CLOSE_MODAL} from '../../services/actions/event-handler';
import { TChildren } from '../../services/types';

const modalRoot = document.getElementById('react-modals');

export const Modal: FC<TChildren & {navCloseModal: undefined | (() => void)}> = ({children, navCloseModal}) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({type: CLOSE_MODAL})
  }

  const closeByEscape = (e: KeyboardEvent) => {
    if(e.key === 'Escape') {
      return navCloseModal !== undefined ? navCloseModal() : closeModal();
    }
    return null;
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
      <button className={styles.close} onClick={navCloseModal !== undefined ? navCloseModal : closeModal}><CloseIcon type='primary'/></button>
      {children}
    </div>
    <ModalOverlay closeModal={navCloseModal !== undefined ? navCloseModal : closeModal}/>
    </div>,
    modalRoot as HTMLElement
  )
}