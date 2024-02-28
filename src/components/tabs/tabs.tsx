import styles from './tabs.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from '../../services/hooks';
import { selectorEventHandler } from '../../services/selectors';


export const Tabs = () => {
  const {parent, tab} = useSelector(selectorEventHandler);
  const setCurrent = (tab: string) => {
    if(parent && parent.current) {
      const idx = tab === 'one' ? 0 : tab === 'two' ? 1 : 2;
      const target = parent.current.children[idx] as HTMLElement;
      const targetId = target.dataset.id;
      parent.current.children[Number(targetId)].scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <ul className={styles.tabs}>
      <li><Tab value='one' active={tab === 'one'} onClick={setCurrent}>Булки</Tab></li>
      <li><Tab value='two' active={tab === 'two'} onClick={setCurrent}>Соусы</Tab></li>
      <li><Tab value='three' active={tab === 'three'} onClick={setCurrent}>Начинки</Tab></li>
    </ul>
  )
}