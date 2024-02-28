import { Outlet, NavLink, useLocation } from "react-router-dom";
import styles from './account.module.css';
import { useDispatch } from "../../services/hooks";
import { userLogout } from "../../services/actions/authentification";

export const Account = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const active = (isActive : boolean) =>
                  isActive
                        ? `text text_type_main-medium text_color_inactive ${styles.link} ${styles.active}`
                        : `text text_type_main-medium text_color_inactive ${styles.link}`;

  const onClick = () => {
    dispatch(userLogout());
  }
  
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