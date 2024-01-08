import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from './auth.module.css';

export const SignIn = () => {

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={`text text_type_main-medium ${styles.title}`}>Вход</h2>
        <EmailInput placeholder={'Логин'}></EmailInput>
        <PasswordInput placeholder={'Пароль'}></PasswordInput>
        <Button extraClass={styles.button}>Войти</Button>
      </form>
      <ul className={styles.list}>
        <li className="text text_type_main-default text_color_inactive">Вы — новый пользователь? <Link to="/signUp" className={styles.link}>Зарегистрироваться</Link></li>
        <li className="text text_type_main-default text_color_inactive">Забыли пароль? <Link to="/forgot" className={styles.link}>Восстановить пароль</Link></li>
      </ul>
    </div>
  )
}