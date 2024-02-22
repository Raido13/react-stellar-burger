import styles from './constructor-list.module.css';
import { ConstructorIngridient } from '../constructor-ingridient/constructor-ingridient';
import { useSelector } from '../../services/hooks';
import { selectorConstructorIngridients } from '../../services/selectors';

export default function ConstructorList() {
  const {ingridients} = useSelector(selectorConstructorIngridients);
  
  return (
    <ul className={`${styles.constructorList} custom-scroll`}>
      {ingridients.map((ingridient, id) => {
        return <ConstructorIngridient ingridient={ingridient} id={id} key={ingridient.elemID} />
      })}
    </ul>
  )
}