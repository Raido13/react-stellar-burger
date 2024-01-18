import { useSelector } from "react-redux"
import { Line } from "../../components/line/line"
import { selectorBurgerIngridients } from "../../services/selectors"

export const Orders = () => {
  const {burgerIngridients} = useSelector(selectorBurgerIngridients);
  return (
    <Line type={'lineOrder'} ingridients={burgerIngridients} />
  )
}