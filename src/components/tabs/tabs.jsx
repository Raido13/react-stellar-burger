import styles from './tabs.module.css'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';


export default function Tabs({setCurrent, current}) {
  return (
    <ul className={styles.tabs}>
      <Tab value='one' active={current === 'one'} onClick={setCurrent}>Булки</Tab>
      <Tab value='two' active={current === 'two'} onClick={setCurrent}>Соусы</Tab>
      <Tab value='three' active={current === 'three'} onClick={setCurrent}>Начинки</Tab>
    </ul>
  )
}

Tabs.propTypes = {
  setCurrent: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired
}