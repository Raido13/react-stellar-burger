import styles from './constructor-list.module.css';
import ConstructorIngridient from '../constructor-ingridient/constructor-ingridient';

export default function ConstructorList({data, deleteIngridient}) {
  return (
    <ul className={`${styles.constructorList} custom-scroll`}>
      {data.map((ingridient, id) => {
        return <ConstructorIngridient ingridient={ingridient} deleteIngridient={deleteIngridient} id={id} key={id}/>
      })}
    </ul>
  )
}