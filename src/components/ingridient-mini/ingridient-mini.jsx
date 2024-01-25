import styles from './ingridient-mini.module.css';

export const IngridientMini = ({ingridient, id, overSize}) => {
  return (
    <li className={`${styles.ingridientMini} ${styles[`ingridientMiniIndex${id}`]}`} key={id}>
      <img className={styles.image} src={ingridient.image} alt={ingridient.name} />
      {overSize !== undefined && <p className={`text text_type_main-default ${styles.number}`}>+{overSize}</p>}
    </li>
  )
}