import { Input, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

export const Field = (props) => {
  const {name} = props;

  switch(name) {
    case 'name': return <Input {...props} error={false} />
    case 'password': return <PasswordInput {...props} />
    case 'email': return <EmailInput {...props} />
    case 'token': return <Input {...props} />
    default: return <h3>No props</h3>
  }
}

Field.propTypes = {
  name: PropTypes.string.isRequired
}