import { Outlet, NavLink } from "react-router-dom";
import styles from './account.module.css';
import { useDispatch } from "react-redux";
import { userLogout } from "../../services/actions/authentication";

export const Account = () => {
  const dispatch = useDispatch();
  const active = isActive =>
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
            <NavLink to='/account' end className={({isActive}) => active(isActive)}>Аккаунт</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to='/account/orders' className={({isActive}) => active(isActive)}>История заказов</NavLink>
          </li>
          <li className={styles.item}>
            <button onClick={onClick} className={`text text_type_main-medium text_color_inactive ${styles.button}`}>Выйти</button>
          </li>
        </ul>
        <p className={`text text_type_main-default text_color_inactive ${styles.caption}`}>В этом разделе вы можете <br /> изменить свои персональные данные</p>
      </nav>
      <Outlet />
    </div>
  )
}