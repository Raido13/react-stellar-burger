import style from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function AppHeader() {
  return (
    <header className={`${style.header} pt-4 pb-4`}>
      <nav className={style.nav}>
        <ul className={style.navContainer}>
          <ol className={style.linksContainer}>
            <li className='pl-5 pr-5'><a className={style.link} href="https://ya.ru"><BurgerIcon type='primary' /><p className="text text_type_main-default">Конструктор</p></a></li>
            <li className='pl-5 pr-5'><a className={style.link} href="https://ya.ru"><ListIcon type='secondary' /><p className="text text_type_main-default text_color_inactive">Лента заказов</p></a></li>
          </ol>
          <li className={style.logo}><a href="https://ya.ru"><Logo /></a></li>
          <li className={`${style.profile} pl-5 pr-5`}><a className={style.link} href="https://ya.ru"><ProfileIcon type='secondary' /><p className="text text_type_main-default text_color_inactive">Личный кабинет</p></a></li>
        </ul>
      </nav>
    </header>
  )
}