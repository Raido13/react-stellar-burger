import IngridientDetails from "../components/Ingridient-details/Ingridient-details";
import styles from './ingridient.module.css';
import Modal from "../components/modal/modal";
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";

export const Ingridient = ({navCloseModal}) => {
  const location = useLocation();

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

Ingridient.propTypes = {
  navCloseModal: PropTypes.func
}