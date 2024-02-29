import { Form } from '../../components/form/form';
import { Field } from "../../components/field/field";
import { userUpdate } from '../../services/actions/authentification';
import { useDispatch, useSelector } from '../../services/hooks';
import { selectorAuthentification } from '../../services/selectors';
import styles from './account.module.css';
import { IFormProps } from '../../services/types';

export const Update = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(selectorAuthentification)
  const onSubmit = (formState: {[key: string] : string}) => {
    dispatch(userUpdate(formState));
  }
  const name = user?.name || '';
  const email = user?.email || '';

  return (
    <div className={styles.update}>
      <Form onSubmit={onSubmit} title={null} button={'Сохранить'} entries={[
        { fillForm: () => {}, initialValue: name, name: 'name', placeholder: 'Имя', Field: (props: IFormProps) => <Field {...props} /> },
        { fillForm: () => {}, initialValue: email, name: 'email', placeholder: 'Логин', Field: (props: IFormProps) => <Field {...props} /> },
        { fillForm: () => {}, initialValue: '', name: 'password', placeholder: 'Пароль', Field: (props: IFormProps) => <Field {...props} /> }
      ]}
      />
    </div>
  )
}