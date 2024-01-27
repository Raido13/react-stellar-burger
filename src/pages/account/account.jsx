import { Outlet, NavLink, useLocation } from "react-router-dom";
import styles from './account.module.css';
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../services/actions/authentication";
import { wsUrlProfile } from "../../utils/api";
import { selectorWebsocket } from "../../services/selectors";
import { wsConnectionCloseProfile, wsConnectionStartProfile, wsGetProfileOrders } from "../../services/actions/websocket";
import { useEffect } from "react";

export const Account = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {wsConnectProfile} = useSelector(selectorWebsocket);
  const active = isActive =>
                  isActive
                        ? `text text_type_main-medium text_color_inactive ${styles.link} ${styles.active}`
                        : `text text_type_main-medium text_color_inactive ${styles.link}`;

  const onClick = () => {
    dispatch(userLogout());
  }

  useEffect(() => {
    wsConnectProfile
          ? dispatch(wsGetProfileOrders)
          : dispatch(wsConnectionStartProfile(`${wsUrlProfile}?token=${localStorage.getItem('accessToken').split(' ')[1]}`));
    return () => {
      dispatch(wsConnectionCloseProfile)
    }
  }, [dispatch, wsConnectProfile])
  
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink to='/profile' end className={({isActive}) => active(isActive)}>Аккаунт</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to='/profile/orders' className={({isActive}) => active(isActive)}>История заказов</NavLink>
          </li>
          <li className={styles.item}>
            <button onClick={onClick} className={`text text_type_main-medium text_color_inactive ${styles.button}`}>Выйти</button>
          </li>
        </ul>
        {location.pathname === '/profile'
              ? <p className={`text text_type_main-default text_color_inactive ${styles.caption}`}>В этом разделе вы можете <br /> изменить свои персональные данные</p>
              : <p className={`text text_type_main-default text_color_inactive ${styles.caption}`}>В этом разделе вы можете <br /> просмотреть свою историю заказов</p>
        }
      </nav>
      <Outlet />
    </div>
  )
}