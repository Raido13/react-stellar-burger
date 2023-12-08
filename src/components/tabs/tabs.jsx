import styles from './tabs.module.css'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from 'react-redux';


export default function Tabs() {
  const {parent, tab} = useSelector(store => store.eventHandler);
  const setCurrent = tab => {
    parent.current?.children[parent.current?.children[tab === 'one' ? 0 : tab === 'two' ? 1 : 2].dataset.id].scrollIntoView({behavior: 'smooth'})
  }

  return (
    <ul className={styles.tabs}>
      <li><Tab value='one' active={tab === 'one'} onClick={setCurrent}>Булки</Tab></li>
      <li><Tab value='two' active={tab === 'two'} onClick={setCurrent}>Соусы</Tab></li>
      <li><Tab value='three' active={tab === 'three'} onClick={setCurrent}>Начинки</Tab></li>
    </ul>
  )
}