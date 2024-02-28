import { useSelector } from "../../services/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { selectorAuthentification } from "../../services/selectors";
import { FC, ReactNode } from "react";

export const ProtectedRoute: FC<{unAuth?: boolean, element?: ReactNode}> = ({unAuth = false, element}) : any => {
  const {user} = useSelector(selectorAuthentification);
  const location = useLocation();

  if(unAuth && user) {
    const {from} = location.state || {from: {pathname: '/'}}
    return <Navigate to={from} />
  }

  if(!unAuth && !user) {
    return <Navigate to='/login' state={{from: location}} />
  }

  return element;
}