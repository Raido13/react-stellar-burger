import styles from './menu.module.css';
import Title from '../title/title';
import Tabs from '../tabs/tabs';
import BurgerIngridients from '../burger-ingridients/burger-ingridients';

const text = 'Собери бургер'

export default function Menu() {
  return(
    <section className={styles.menu}>
      <Title text={text}/>
      <Tabs />
      <BurgerIngridients />
    </section>
  )
}