import styles from './constructor-ingridients.module.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorList from '../constructor-list/constructor-list';
import bunThumbnail from '@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png'
import { useSelector } from 'react-redux';

export default function ConstructorIngridients() {
  const bun = useSelector(store => store.constructorIngridients.bun);

  return (
    <div className={styles.constructorIngridients}>
      {bun !== null
        ? <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
            extraClass={styles.margin}
          />
        : <ConstructorElement
            type="top"
            isLocked={true}
            text={'Добавьте булку'}
            price={0}
            thumbnail={bunThumbnail}
            extraClass={styles.margin}
          />
      }

      <ConstructorList />

      {bun !== null
        ? <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
            extraClass={`${styles.margin} ${styles.inverse}`}
          />
        : <ConstructorElement
            type="bottom"
            isLocked={true}
            text={'Добавьте булку'}
            price={0}
            thumbnail={bunThumbnail}
            extraClass={`${styles.margin} ${styles.inverse}`}
          />
      }
    </div>
  )
}