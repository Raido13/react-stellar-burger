import styles from './burger-ingridients.module.css';
import BurgerIngridientsType from '../burger-ingridients-type/burger-ingridients-type';

export default function BurgerIngridients(props) {
  const {ingridients} = props;
  const data = [[], [], []];
  ingridients.map(prop => {
    return prop.type === 'bun'
              ? data[0].push(prop)
              : prop.type === 'sauce'
                ? data[1].push(prop)
                : data[2].push(prop)
  });

  return (
    <div className={`${styles.burgerIngridients} custom-scroll`}>
      {data.map(ingridients => {
        return (
          <BurgerIngridientsType sortedData={ingridients} ingridientsType={ingridients[0].type} key={ingridients[0].type}/>
        )
      })}
    </div>
  )
}