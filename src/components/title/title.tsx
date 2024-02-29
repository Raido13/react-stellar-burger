import { FC } from 'react';
import styles from './title.module.css';

export const Title: FC<{text: string}> = ({text}) => {
  return (
    <h1 className={`${styles.title} text text_type_main-large`}>{text}</h1>
  )
}