import style from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

export default function AppHeader() {
  const {burgerIngridients} = useSelector(store => store.burgerIngridients);
  const {pathname} = useLocation();
  const activeText = isActive =>
                        isActive
                              ? `text text_type_main-default`
                              : `text text_type_main-default text_color_inactive`;
  const activeIcon = isActive =>
                        isActive
                              ? 'primary'
                              : 'secondary';

  const customActive = burgerIngridients.reduce((arr, {_id}) => ([...arr, `/ingridients/${_id}`]), []).includes(pathname);

  return (
    <header className={`${style.header} pt-4 pb-4`}>
      <nav className={style.nav}>
        <ul className={style.navContainer}>
          <ol className={style.linksContainer}>
            <li className='pl-5 pr-5'><NavLink className={style.link} to=''>{({isActive}) => <><BurgerIcon type={activeIcon(isActive ? isActive : customActive)} /><p className={activeText(isActive ? isActive : customActive)}>Конструктор</p></>}</NavLink></li>
            <li className='pl-5 pr-5'><NavLink className={style.link} to='/feed'>{({isActive}) => <><ListIcon type={activeIcon(isActive)} /><p className={activeText(isActive)}>Лента заказов</p></>}</NavLink></li>
          </ol>
          <li className={style.logo}><NavLink to='/'><Logo /></NavLink></li>
          <li className={`${style.profile} pl-5 pr-5`}><NavLink className={style.link} to='/account'>{({isActive}) => <><ProfileIcon type={activeIcon(isActive)} /><p className={activeText(isActive)}>Личный кабинет</p></>}</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}