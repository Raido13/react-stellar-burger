import styles from './constructor-list.module.css';
import ConstructorIngridient from '../constructor-ingridient/constructor-ingridient';
import PropTypes from 'prop-types';
import {ingredientTypes} from '../../utils/types';

export default function ConstructorList(props) {
  const {data} = props;

  return (
    <ul className={`${styles.constructorList} custom-scroll`}>
      {data.map((ingridient, id) => {
        return <ConstructorIngridient ingridient={ingridient} {...props} id={id} key={id}/>
      })}
    </ul>
  )
}

ConstructorList.propTypes = {
  data: PropTypes.arrayOf(ingredientTypes.isRequired).isRequired,
  deleteIngridient: PropTypes.func.isRequired
}