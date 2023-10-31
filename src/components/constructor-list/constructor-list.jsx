import styles from './constructor-list.module.css';
import ConstructorIngridient from '../constructor-ingridient/constructor-ingridient';

export default function ConstructorList(props) {
  const {data} = props;
  return (
    <ul className={`${styles.constructorList} custom-scroll`}>
      {data.map(ingridient => {
        return <ConstructorIngridient data={ingridient} key={ingridient._id}/>
      })}
    </ul>
  )
}