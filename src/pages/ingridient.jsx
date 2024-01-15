import { useMemo } from "react";
import IngridientDetails from "../components/Ingridient-details/Ingridient-details";
import styles from './ingridient.module.css';
import { useDispatch, useSelector } from "react-redux";
import { SET_INGRIDIENT_DETAILS } from "../services/actions/ingridient-details";
import { useLocation, useParams } from "react-router-dom";
import Modal from "../components/modal/modal";

export const Ingridient = ({navCloseModal}) => {
  const dispatch = useDispatch();
  const {burgerIngridients} = useSelector(store => store.burgerIngridients);
  const {id} = useParams();
  const location = useLocation();

  useMemo(() => {
    dispatch({type: SET_INGRIDIENT_DETAILS, ingridient: burgerIngridients.find(({_id}) => _id === id)})
  }, [dispatch, id, burgerIngridients])

  return (
    <>
      {location.state?.ingridientPage
          ? <Modal navCloseModal={navCloseModal}><IngridientDetails /></Modal>
          : <div className={styles.ingridient}>
              <IngridientDetails />
            </div>
      }
    </>
  )
}