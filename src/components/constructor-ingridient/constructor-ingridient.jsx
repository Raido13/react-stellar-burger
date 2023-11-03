import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './constructor-ingridient.module.css';

export default function ConstructorIngridient({ingridient, id, deleteIngridient}) {
  const { name, price, image, type } = ingridient;

  return (
    <>
      {type !== 'bun' &&
        <li className={styles.constructorIngridient}>
          <DragIcon type="primary" />
          <ConstructorElement
            key={id}
            text={name}
            price={price}
            thumbnail={image}
            handleClose={() => deleteIngridient(ingridient)}
          />
        </li>
      }
    </>
  )
}