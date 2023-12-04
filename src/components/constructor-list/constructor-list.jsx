import styles from './constructor-list.module.css';
import ConstructorIngridient from '../constructor-ingridient/constructor-ingridient';
import { useSelector } from 'react-redux';

export default function ConstructorList() {
  const ingridients = useSelector(store => store.constructorIngridients.ingridients);

  return (
    <ul className={`${styles.constructorList} custom-scroll`}>
      {ingridients.map((ingridient, id) => {
        return <ConstructorIngridient ingridient={ingridient} id={id} key={id}/>
      })}
    </ul>
  )
}