import { useSelector, useDispatch } from "react-redux"
import { Line } from "../../components/line/line"
import { wsUrlProfile } from "../../utils/api";
import { wsConnectionCloseProfile, wsConnectionStartProfile, wsGetProfileOrders } from "../../services/actions/websocket";
import { selectorWebsocket } from "../../services/selectors";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const Orders = () => {
  const dispatch = useDispatch();
  const {wsConnectProfile, profileOrders} = useSelector(selectorWebsocket);

  useEffect(() => {
    wsConnectProfile
          ? dispatch(wsGetProfileOrders)
          : dispatch(wsConnectionStartProfile(`${wsUrlProfile}?token=${localStorage.getItem('accessToken').split(' ')[1]}`));
    return () => {
      dispatch(wsConnectionCloseProfile)
    }
  }, [dispatch, wsConnectProfile])

  return (
    <>
      {wsConnectProfile && profileOrders.length !== 0 && <Line type={'lineOrder'} orders={profileOrders} />}
      <Outlet />
    </>
  )
}