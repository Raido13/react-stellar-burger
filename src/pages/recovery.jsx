import { Link } from "react-router-dom";
import styles from './auth.module.css';
import { Form } from "../components/form/form";
import { Field } from "../components/field/field";
import { userRecovery } from "../services/actions/authentication";
import { useDispatch } from "react-redux";

export const Recovery = () => {
  const dispatch = useDispatch();
  const onSubmit = formState => {
    dispatch(userRecovery(formState))
  }

  return (
    <div className={styles.container}>
      <Form onSubmit={onSubmit} title={'Восстановление пароля'} button={'Сохранить'} entries={[
          { initialValue: '', name: 'password', placeholder: 'Введите новый пароль', Field: props => <Field {...props} /> },
          { initialValue: '', name: 'token', placeholder: 'Введите код из письма', Field: props => <Field {...props} /> }
        ]}
      />
      <ul className={styles.list}>
        <li className="text text_type_main-default text_color_inactive">Вспомнили пароль? <Link to="/signIn" className={styles.link}>Войти</Link></li>
      </ul>
    </div>
  )
}