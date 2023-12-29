import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from './auth.module.css';

export const Recovery = () => {

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className='text text_type_main_medium'>Восстановление пароля</h2>
        <PasswordInput placeholder={'Введите новый пароль'}></PasswordInput>
        <PasswordInput placeholder={'Введите код из письма'}></PasswordInput>
        <Button>Сохранить</Button>
      </form>
      <ul className={styles.list}>
        <li className="text text_type_main-default text_color_inactive">Вспомнили пароль? <Link to="/signIn" className={styles.link}>Войти</Link></li>
      </ul>
    </div>
  )
}