import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './buttons.module.css';
import {type FC} from 'react';

export const Buttons : FC<{button : string; isVisible : boolean | undefined}> = ({button, isVisible}) => {
  return (
    <>
      {isVisible !== undefined
            ? <div className={`${styles.buttons} ${isVisible ? styles.active : ''}`}><Button type='secondary' htmlType='reset' extraClass={styles.button}>Отмена</Button><Button type='primary' htmlType="submit" extraClass={styles.button}>{button}</Button></div>
            : <Button type='primary' htmlType="submit" extraClass={styles.button}>{button}</Button>
      }
    </>
  )
}