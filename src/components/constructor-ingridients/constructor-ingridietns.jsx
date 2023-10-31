import styles from './constructor-ingridients.module.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import data from '../../utils/data';
import ConstructorList from '../constructor-list/constructor-list';

export default function ConstructorIngridients() {
  const {name, image, price} = data[0];
  return (
    <div className={styles.constructorIngridients}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={`${name} (верх)`}
        price={price}
        thumbnail={image}
        extraClass={styles.margin}
      />
      <ConstructorList data={data}/>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={`${name} (низ)`}
        price={price}
        thumbnail={image}
        extraClass={styles.margin}
      />
    </div>
  )
}