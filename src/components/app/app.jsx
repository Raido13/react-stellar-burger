import { useSelector, useDispatch } from 'react-redux';
import AppHeader from '../app-header/app-header';
import styles from './app.module.css';
import {getBurgerIngridients} from '../../services/actions/burger-ingridients';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home, SignIn, SignUp, Forgot, Recovery, Ingridient, Account, Err404 } from '../../pages';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBurgerIngridients());
  }, [dispatch]);
  const {isLoading, hasError, burgerIngridients} = useSelector(store => store.burgerIngridients);

  return (
    <>
      <AppHeader />
      <div className={styles.app}>
      {!isLoading && !hasError && burgerIngridients.length && 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/recovery' element={<Recovery />} />
          <Route path='/ingridient' element={<Ingridient />} />
          {/* <Route path='/account' element={<Account />} />
          <Route path='*' element={<Err404 />} /> */}
        </Routes>
      }
      </div>
    </>
  );
}

export default App;
