import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from './auth.module.css';
import { Form } from "../components/form/form";
import { Field } from "../components/field/field";
import { ON_ERROR } from "../services/actions/authentification";
import { useDispatch } from "../services/hooks";
import { postRecovery } from '../utils/api';
import { IFormProps } from "../services/types";

export const Recovery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (formState : {[key: string] : string}) => {
    const {password, token} = formState;
    postRecovery(password, token)
          .then(() => {
            localStorage.removeItem('forgot');
            navigate('/login')
          })
          .catch(() => dispatch({type: ON_ERROR}))
  }

  if(localStorage.getItem('forgot') === null) {
    return <Navigate to='/' />
  }

  const onClick = () => {
    localStorage.removeItem('forgot');
  }

  return (
    <div className={styles.container}>
      <Form onSubmit={onSubmit} title={'Восстановление пароля'} button={'Сохранить'} entries={[
          { fillForm: () => {}, initialValue: '', name: 'password', placeholder: 'Введите новый пароль', Field: (props: IFormProps) => <Field {...props} /> },
          { fillForm: () => {}, initialValue: '', name: 'token', placeholder: 'Введите код из письма', Field: (props: IFormProps) => <Field {...props} /> }
        ]}
      />
      <ul className={styles.list}>
        <li className="text text_type_main-default text_color_inactive">Вспомнили пароль? <Link to="/login" onClick={onClick} className={styles.link}>Войти</Link></li>
      </ul>
    </div>
  )
}