import { useDispatch } from "react-redux";
import { Outlet, NavLink } from "react-router-dom";

export const Account = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <NavLink to='/account' end>Аккаунт</NavLink>
          </li>
          <li>
            <NavLink to='/order'>История заказов</NavLink>
          </li>
          <li>
            <button>Выйти</button>
          </li>
        </ul>
        <p>В этом разделе вы можете изменить свои персональные данные</p>
      </nav>
      <Outlet />
    </div>
  )
}