import styles from './burger-ingridients.module.css';
import data from '../../utils/data';
import Ingridient from '../ingridient/ingridient';

const {type} = data[0];

export default function BurgerIngridients() {
  const text = (type === 'bun')
    ? 'Булки'
    : (type !== 'main')
      ? 'Соусы'
      : 'Начинки';

  return (
    <div className={`${styles.burgerIngridients} custom-scroll`}>
      <div className={styles.type}>
        <h2 className={`${styles.title} text text_type_main-medium`}>{text}</h2>
        <div className={styles.container}>
        <Ingridient {...data[0]} />
        <Ingridient {...data[1]} />
        </div>
      </div>
      <div className={styles.type}>
        <h2 className={`${styles.title} text text_type_main-medium`}>{text}</h2>
        <div className={styles.container}>
        <Ingridient {...data[0]} />
        <Ingridient {...data[1]} />
        <Ingridient {...data[2]} />
        <Ingridient {...data[3]} />
        </div>
      </div>
    </div>
  )
}