import { Link } from "react-router-dom";
import styles from './auth.module.css';
import { Form } from "../components/form/form";
import { Field } from "../components/field/field";
import { userSignUp } from "../services/actions/authentification";
import { useDispatch } from "../services/hooks";
import { IFormProps } from "../services/types";

export const SignUp = () => {
  const dispatch = useDispatch()
  const onSubmit = (formState: {[key: string] : string}) => {
    dispatch(userSignUp(formState))
  }

  return (
    <div className={styles.container}>
      <Form onSubmit={onSubmit} title={'Регистрация'} button={'Зарегистрироваться'} entries={[
          { initialValue: '', name: 'name', placeholder: 'Имя', Field: (props: IFormProps) => <Field {...props} /> },
          { initialValue: '', name: 'email', placeholder: 'E-mail', Field: (props: IFormProps) => <Field {...props} /> },
          { initialValue: '', name: 'password', placeholder: 'Пароль', Field: (props: IFormProps) => <Field {...props} /> }
        ]}
      />
      <ul className={styles.list}>
        <li className="text text_type_main-default text_color_inactive">Уже зарегистрированы? <Link to="/login" className={styles.link}>Войти</Link></li>
      </ul>
    </div>
  )
}