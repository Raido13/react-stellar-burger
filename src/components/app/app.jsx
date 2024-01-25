import { useSelector, useDispatch } from 'react-redux';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import {getBurgerIngridients} from '../../services/actions/burger-ingridients';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBurgerIngridients());
  }, [dispatch]);
  const {isLoading, hasError, burgerIngridients} = useSelector(store => store.burgerIngridients);

  return (
    <>
      <AppHeader />
      {!isLoading && !hasError && burgerIngridients.length && <Main />}
    </>
  );
}

export default App;
