import { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import {getIngridients} from '../../utils/api';

function App() {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: []
  })

  useEffect(() => {
    setState({...state, isLoading: true})
    getIngridients()
      .then(data => setState({...state, isLoading: false, data: data}))
      .catch(() => setState({...state, isLoading: false, hasError: true}))
  }, []);
  
  return (
    <>
      <AppHeader />
      {!state.isLoading && !state.hasError && state.data.length && <Main data={state.data}/>}
    </>
  );
}

export default App;
