import { Link, useNavigate } from "react-router-dom";
import styles from './auth.module.css';
import { Form } from "../components/form/form";
import { Field } from "../components/field/field";
import { ON_ERROR } from "../services/actions/authentification";
import { postForgot } from '../utils/api';
import { useDispatch } from "../services/hooks";
import { IFormProps } from "../services/types";

export const Forgot = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (formState: {[key: string]: string}) => {
    const {email} = formState;
    postForgot(email)
          .then(() => {
            localStorage.setItem('forgot', 'true');
            navigate('/reset-password');
          })
          .catch(() => dispatch({type: ON_ERROR}));
  }

  return (
    <div className={styles.container}>
      <Form onSubmit={onSubmit} title={'Восстановление пароля'} button={'Восстановить'} entries={[
          { fillForm: () => {}, initialValue: '', name: 'email', placeholder: 'Укажите e-mail', Field: (props: IFormProps) => <Field {...props} /> },
        ]}
      />
      <ul className={styles.list}>
        <li className="text text_type_main-default text_color_inactive">Вспомнили пароль? <Link to="/login" className={styles.link}>Войти</Link></li>
      </ul>
    </div>
  )
}