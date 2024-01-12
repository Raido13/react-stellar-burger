import { Link } from "react-router-dom";
import styles from './auth.module.css';
import { Form } from "../components/form/form";
import { Field } from "../components/field/field";
import { userForgot } from "../services/actions/authentication";
import { useDispatch } from "react-redux";

export const Forgot = () => {
  const dispatch = useDispatch();
  const onSubmit = formState => {
    dispatch(userForgot(formState))
  }

  return (
    <div className={styles.container}>
      <Form onSubmit={onSubmit} title={'Восстановление пароля'} button={'Восстановить'} entries={[
          { initialValue: '', name: 'email', placeholder: 'Укажите e-mail', Field: props => <Field {...props} /> },
        ]}
      />
      <ul className={styles.list}>
        <li className="text text_type_main-default text_color_inactive">Вспомнили пароль? <Link to="/signIn" className={styles.link}>Войти</Link></li>
      </ul>
    </div>
  )
}