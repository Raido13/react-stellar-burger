import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { selectorAuthentification } from "../../services/selectors";

export const ProtectedRoute = ({unAuth = false, element}) => {
  const {user} = useSelector(selectorAuthentification);
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

ProtectedRoute.propTypes = {
  unAuth: PropTypes.bool,
  element: PropTypes.object.isRequired
}