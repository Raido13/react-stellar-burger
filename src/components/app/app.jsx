import { useSelector, useDispatch } from 'react-redux';
import AppHeader from '../app-header/app-header';
import styles from './app.module.css';
import {getBurgerIngridients} from '../../services/actions/burger-ingridients';
import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Home, SignIn, SignUp, Forgot, Recovery, Ingridient, Account, Update, Err404, Orders, Feed } from '../../pages';
import { ProtectedRoute } from '../protected-route/protected-route';
import { checkAuth } from '../../services/actions/authentication';
import { selectorAuthentification, selectorBurgerIngridients } from '../../services/selectors';

export default function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const {isLoading, hasError, burgerIngridients} = useSelector(selectorBurgerIngridients);
  const {userRequested} = useSelector(selectorAuthentification);

  const navCloseModal = () => {
    navigate(-1);
  }

  useEffect(() => {
    dispatch(getBurgerIngridients());
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <>
      {!isLoading && !hasError && burgerIngridients.length &&
        <>
          <AppHeader />
          <div className={styles.app}>
            {!userRequested &&
              <Routes location={location}>
                <Route path='/' element={<Home />} >
                  {location.state?.ingridientPage && <Route path='ingridients/:id' element={<Ingridient navCloseModal={navCloseModal}/>} />}
                </Route>
                <Route path='/signIn' element={<ProtectedRoute unAuth={true} element={<SignIn />} />} />
                <Route path='/signUp' element={<ProtectedRoute unAuth={true} element={<SignUp />} />} />
                <Route path='/forgot' element={<ProtectedRoute unAuth={true} element={<Forgot />} />} />
                <Route path='/recovery' element={<ProtectedRoute unAuth={true} element={<Recovery />} />} />
                <Route path='/account' element={<ProtectedRoute element={<Account />} />} >
                  <Route path='' element={<ProtectedRoute element={<Update />} />} />
                  <Route path='orders' element={<ProtectedRoute element={<Orders />} />} />
                </Route>
                <Route path='/feed' element={<Feed />} />
                <Route path='ingridients/:id' element={<Ingridient />} />
                <Route path='*' element={<Err404 />} />
              </Routes>
            }
          </div>
        </>
      }
    </>
  )
}
