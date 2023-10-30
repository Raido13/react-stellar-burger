import styles from './constructor-list.module.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import data from '../../utils/data';
import icon from '../../images/dc6-icon@2x.png';

export default function ConstructorList() {
  const {name, image, price} = data[0];
  return (
    <div className={styles.constructorList}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={name}
        price={price}
        thumbnail={image}
        extraClass={styles.margin}
      />
      <ul className={`${styles.list} custom-scroll`}>
        <li className={styles.container}>
              <img src={icon} className={styles.icon} alt="переместить" />
              <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
              />
        </li>
        <li className={styles.container}>
              <img src={icon} className={styles.icon} alt="переместить" />
              <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
              />
        </li>
        <li className={styles.container}>
              <img src={icon} className={styles.icon} alt="переместить" />
              <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
              />
        </li>
        <li className={styles.container}>
              <img src={icon} className={styles.icon} alt="переместить" />
              <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
              />
        </li>
        <li className={styles.container}>
              <img src={icon} className={styles.icon} alt="переместить" />
              <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
              />
        </li>
        <li className={styles.container}>
              <img src={icon} className={styles.icon} alt="переместить" />
              <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
              />
        </li>
      </ul>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={name}
        price={price}
        thumbnail={image}
        extraClass={styles.margin}
      />
    </div>
  )
}