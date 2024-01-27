import { useSelector } from "react-redux"
import { Line } from "../../components/line/line"
import { selectorWebsocket } from "../../services/selectors";
import { Outlet } from "react-router-dom";

export const Orders = () => {
  const {wsConnectProfile, profileOrders} = useSelector(selectorWebsocket);

  return (
    <>
      {wsConnectProfile && profileOrders.length !== 0 && <Line type={'lineOrder'} orders={profileOrders} />}
      <Outlet />
    </>
  )
}