import { Form } from '../../components/form/form';
import { Field } from "../../components/field/field";
import { userUpdate } from '../../services/actions/authentication';
import { useDispatch, useSelector } from 'react-redux';

export const Update = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(store => store.authentication)
  const onSubmit = formState => {
    dispatch(userUpdate(formState));
  }

  return (
    <Form onSubmit={onSubmit} title={null} button={'Сохранить'} entries={[
      { initialValue: user.name, name: 'name', placeholder: 'Имя', Field: props => <Field {...props} /> },
      { initialValue: user.email, name: 'email', placeholder: 'Логин', Field: props => <Field {...props} /> },
      { initialValue: '', name: 'password', placeholder: 'Пароль', Field: props => <Field {...props} /> }
    ]}
    />
  )
}