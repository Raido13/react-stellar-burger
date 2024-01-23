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
import { OrderPreview } from '../order-preview/order-preview';

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
                <Route path='/login' element={<ProtectedRoute unAuth={true} element={<SignIn />} />} />
                <Route path='/register' element={<ProtectedRoute unAuth={true} element={<SignUp />} />} />
                <Route path='/forgot-password' element={<ProtectedRoute unAuth={true} element={<Forgot />} />} />
                <Route path='/reset-password' element={<ProtectedRoute unAuth={true} element={<Recovery />} />} />
                <Route path='/profile' element={<ProtectedRoute element={<Account />} />} >
                  <Route path='' element={<ProtectedRoute element={<Update />} />} />
                  <Route path='orders' element={<ProtectedRoute element={<Orders />} />} />
                  {location.state?.orderPreview && <Route path='orders/034534' element={<OrderPreview ingridients={burgerIngridients} orderStatus={['done', 'await', 'created', 'canceled'][Math.floor(Math.random() * 4)]} navCloseModal={navCloseModal}/>} />}
                </Route>
                <Route path='feed' element={<Feed />}>
                  {location.state?.orderPreview && <Route path=':orderNumber' element={<OrderPreview navCloseModal={navCloseModal} />} />}
                </Route>
                <Route path='ingridients/:id' element={<Ingridient />} />
                <Route path='profile/orders/034534' element={<ProtectedRoute element={<OrderPreview ingridients={burgerIngridients} orderStatus={['done', 'await', 'created', 'canceled'][Math.floor(Math.random() * 4)]} navCloseModal={navCloseModal} />} />} />
                <Route path='feed/:orderNumber' element={<OrderPreview />} />
                <Route path='*' element={<Err404 />} />
              </Routes>
            }
          </div>
        </>
      }
    </>
  )
}
