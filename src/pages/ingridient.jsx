import { useDispatch, useSelector } from "react-redux";
import IngridientDetails from "../components/Ingridient-details/Ingridient-details";
import styles from './ingridient.module.css';
import { useMemo } from "react";
import { SET_INGRIDIENT_DETAILS } from "../services/actions/ingridient-details";

export const Ingridient = () => {
  const {burgerIngridients} = useSelector(store => store.burgerIngridients);
  const dispatch = useDispatch();
  
  useMemo(() => {
    dispatch({type: SET_INGRIDIENT_DETAILS, ingridient: burgerIngridients[1]})
  }, [dispatch])

  return (
    <div className={styles.ingridient}>
        <IngridientDetails />
    </div>
  )
}