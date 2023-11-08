import styles from './Ingridient-details.module.css';
import PropTypes from 'prop-types';

export default function IngridientDetails(props) {
  const {ingridientData} = props;

  return (
    <div className={styles.ingridientDetails}>
      <h3 className={`${styles.title} text text_type_main-large`}>Детали ингридиента</h3>
      <img className={`${styles.img}`} src={ingridientData.image_large} alt={ingridientData.name} />
      <p className={`${styles.name} text text_type_main-medium`}>{ingridientData.name}</p>
      <ul className={`${styles.list}`}>
        <li className={`${styles.item}`}>
          <p className={`${styles.paragraph} text_type_main-default`}>Калории,ккал</p>
          <p className={`${styles.paragraph} text_type_digits-default`}>{ingridientData.calories}</p>
        </li>
        <li className={`${styles.item}`}>
          <p className={`${styles.paragraph} text_type_main-default`}>Белки, г</p>
          <p className={`${styles.paragraph} text_type_digits-default`}>{ingridientData.proteins}</p>
        </li>
        <li className={`${styles.item}`}>
          <p className={`${styles.paragraph} text_type_main-default`}>Жиры, г</p>
          <p className={`${styles.paragraph} text_type_digits-default`}>{ingridientData.fat}</p>
        </li>
        <li className={`${styles.item}`}>
          <p className={`${styles.paragraph} text_type_main-default`}>Углеводы, г</p>
          <p className={`${styles.paragraph} text_type_digits-default`}>{ingridientData.carbohydrates}</p>
        </li>
      </ul>
    </div>
  )
}

IngridientDetails.propTypes = {
  ingridientData: PropTypes.object.isRequired
}