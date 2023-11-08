import styles from './title.module.css';
import propTypes from 'prop-types';

export default function Title({text}) {
  return (
    <h1 className={`${styles.title} text text_type_main-large`}>{text}</h1>
  )
}

Title.propType = {
  text: propTypes.string.isRequired
}