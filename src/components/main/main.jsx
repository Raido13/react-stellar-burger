import Menu from '../menu/menu';
import Cart from '../cart/cart';
import styles from './main.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import IngridientDetails from '../Ingridient-details/Ingridient-details';
import OrderDetails from '../order-details/order-details';

import ModalOverlay from '../modal-overlay/modal-overlay';


export default function Main(props) {
  const [ingridient, setIngridient] = useState([]);
  const [bun, setBun] = useState(null);
  const [tab, setTab] = useState('one');
  const [ingridientData, setIngridientData] = useState(null);
  const [orderPopup, setorderPopup] = useState(false);

  const getCounter = item => {
    return item.type === 'bun'
              ? bun?._id === item._id ? 2 : 0
              : ingridient.filter(it => it._id === item._id).length
  }

  const setCurrent = tab => {
    setTab(tab);
  }

  const generateID = item => {
    const prefix = ['a', 'z', 'b', 'x', 'w'];
    let res = '';
    prefix.forEach(() => {
      res += prefix[Math.floor(Math.random()*prefix.length)];
    });
    return item = {...item, elemID: `${res}${Date.now()}`};
  }

  const addIngridient = item => {
    item.type === 'bun'
        ? setBun(item)
        : setIngridient(ingridient => [...ingridient, generateID(item)]);
  }

  const deleteIngridient = item => {
    setIngridient(oldList => {
      return oldList.filter(it => it.elemID !== item.elemID);
    });
  }

  const openIngridientModal = item => {
    setIngridientData(item)
  }

  const openOrderModal = () => {
    setorderPopup(true)
  }

  const closeIngridientModal = () => {
    setIngridientData(null)
  }

  const closeOrderModal = () => {
    setorderPopup(false)
  }

  return (
    <main className={styles.main}>
      <Menu addIngridient={addIngridient} tab={tab} setCurrent={setCurrent} {...props} openModal={openIngridientModal} getCounter={getCounter} />
      <Cart data={ingridient} deleteIngridient={deleteIngridient} bun={bun} openModal={openOrderModal} />
      {ingridientData && <ModalOverlay closeModal={closeIngridientModal}><IngridientDetails ingridientData={ingridientData} /></ModalOverlay>}
      {orderPopup && <ModalOverlay closeModal={closeOrderModal}><OrderDetails /></ModalOverlay>}
    </main>
  ) 
}

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}