import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({unAuth = false, element}) => {
  const {user} = useSelector(store => store.authentication);
  const location = useLocation();

  if(unAuth && user) {
    const {from} = location.state || {from: {pathname: '/'}}
    return <Navigate to={from} />
  }

  if(!unAuth && !user) {
    return <Navigate to='/signIn' state={{from: location}} />
  }

  return element;
}