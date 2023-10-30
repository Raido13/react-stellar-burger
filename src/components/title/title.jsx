import styles from './title.module.css';

export default function Title(props) {
  return (
    <h1 className={`${styles.title} text text_type_main-large`}>{props.text}</h1>
  )
}