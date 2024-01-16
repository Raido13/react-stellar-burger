import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './buttons.module.css';
import PropTypes from 'prop-types';

export const Buttons = ({button, isVisible}) => {
  return (
    <>
      {isVisible !== undefined
            ? <div className={`${styles.buttons} ${isVisible ? styles.active : ''}`}><Button type='primary' htmlType="submit" extraClass={styles.button}>{button}</Button><Button type='secondary' htmlType='reset' extraClass={styles.button}>Отмена</Button></div>
            : <Button type='primary' htmlType="submit" extraClass={styles.button}>{button}</Button>
      }
    </>
  )
}

Buttons.propTypes = {
  button: PropTypes.string.isRequired,
  isVisible: PropTypes.bool
} 