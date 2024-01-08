import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from './auth.module.css';

export const SignUp = () => {

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={`text text_type_main-medium ${styles.title}`}>Регистрация</h2>
        <Input placeholder={'Имя'}></Input>
        <EmailInput placeholder={'E-mail'}></EmailInput>
        <PasswordInput placeholder={'Пароль'}></PasswordInput>
        <Button extraClass={styles.button}>Зарегистрироваться</Button>
      </form>
      <ul className={styles.list}>
        <li className="text text_type_main-default text_color_inactive">Уже зарегистрированы? <Link to="/signIn" className={styles.link}>Войти</Link></li>
      </ul>
    </div>
  )
}