import Menu from '../menu/menu';
import Cart from '../cart/cart';
import styles from './main.module.css';
import { useState } from 'react';
import data from '../../utils/data';


export default function Main() {
  const [ingridient, setIngridient] = useState([]);
  const [bun, setBun] = useState(null);
  const [tab, setTab] = useState('one');

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

  const addIngridient = (item) => {
    item.type === 'bun'
        ? setBun(item)
        : setIngridient(ingridient => [...ingridient, generateID(item)]);
  }

  const deleteIngridient = item => {
    setIngridient(oldList => {
      return oldList.filter(it => it.elemID !== item.elemID);
    });
  }

  return (
    <main className={styles.main}>
      <Menu addIngridient={addIngridient} tab={tab} setCurrent={setCurrent} data={data} getCounter={getCounter} />
      <Cart data={ingridient} deleteIngridient={deleteIngridient} bun={bun}/>
    </main>
  ) 
}