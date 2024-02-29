import {IngridientDetails} from "../components/ingridient-details/ingridient-details";
import styles from './ingridient.module.css';
import {Modal} from "../components/modal/modal";
import { useLocation } from "react-router-dom";
import { FC } from "react";

export const Ingridient: FC<{navCloseModal: undefined | (() => void)}> = ({navCloseModal}) => {
  const location = useLocation();

  return (
    <>
      {location.state?.ingridientPage
          ? <Modal navCloseModal={navCloseModal}><IngridientDetails updateTitle={undefined} /></Modal>
          : <div className={styles.ingridient}>
              <IngridientDetails updateTitle={'YES'} />
            </div>
      }
    </>
  )
}