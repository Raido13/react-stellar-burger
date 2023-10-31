import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './constructor-ingridient.module.css';

export default function ConstructorIngridient(props) {
  const {data} = props;
  const {name, price, image, _id, type} = data;
  return (
    <>
      {type !== 'bun' &&
        <li className={styles.constructorIngridient}>
          <DragIcon type="primary" />
          <ConstructorElement
            key={_id}
            text={name}
            price={price}
            thumbnail={image}
          />
        </li>
      }
    </>
  )
}