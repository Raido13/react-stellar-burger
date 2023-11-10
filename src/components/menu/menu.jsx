import styles from './menu.module.css';
import Title from '../title/title';
import Tabs from '../tabs/tabs';
import BurgerIngridients from '../burger-ingridients/burger-ingridients';
import PropTypes from 'prop-types';

export default function Menu(props) {
  const {setCurrent, tab} = props;

  return(
    <section className={styles.menu}>
      <Title text={'Собери бургер'}/>
      <Tabs setCurrent={setCurrent} current={tab}/>
      <BurgerIngridients {...props}/>
    </section>
  )
}

Menu.propTypes = {
  tab: PropTypes.string.isRequired,
  setCurrent : PropTypes.func.isRequired
}