import { Link } from "react-router-dom";
import styles from './auth.module.css';
import { Form } from "../components/form/form";
import { Field } from "../components/field/field";
import { userSignIn } from "../services/actions/authentification";
import { useDispatch } from "../services/hooks";
import { IFormProps } from "../services/types";

export const SignIn = () => {
  const dispatch = useDispatch();
  const onSubmit = (formState: {[key: string] : string}) => {
    dispatch(userSignIn(formState))
  }

  return (
    <div className={styles.container}>
      <Form onSubmit={onSubmit} title={'Вход'} button={'Войти'} entries={[
          { fillForm: () => {}, initialValue: '', name: 'email', placeholder: 'E-mail', Field: (props: IFormProps) => <Field {...props} /> },
          { fillForm: () => {}, initialValue: '', name: 'password', placeholder: 'Пароль', Field: (props: IFormProps) => <Field {...props} /> }
        ]}
      />
      <ul className={styles.list}>
        <li className="text text_type_main-default text_color_inactive">Вы — новый пользователь? <Link to="/register" className={styles.link}>Зарегистрироваться</Link></li>
        <li className="text text_type_main-default text_color_inactive">Забыли пароль? <Link to="/forgot-password" className={styles.link}>Восстановить пароль</Link></li>
      </ul>
    </div>
  )
}