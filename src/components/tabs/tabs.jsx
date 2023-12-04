import styles from './tabs.module.css'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector, useDispatch } from 'react-redux';
import {SWITCH_TAB} from '../../services/actions/event-handler';


export default function Tabs() {
  const {tab} = useSelector(store => store.eventHandler);
  const dispatch = useDispatch();
  const setCurrent = tab => {
    dispatch({type: SWITCH_TAB, tab: tab })
  }

  return (
    <ul className={styles.tabs}>
      <Tab value='one' active={tab === 'one'} onClick={setCurrent}>Булки</Tab>
      <Tab value='two' active={tab === 'two'} onClick={setCurrent}>Соусы</Tab>
      <Tab value='three' active={tab === 'three'} onClick={setCurrent}>Начинки</Tab>
    </ul>
  )
}