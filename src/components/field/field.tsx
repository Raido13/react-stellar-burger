import { Input, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { ChangeEvent, FC } from "react";

export const Field : FC<{name: string, initialValue: string, placeholder: string, fillForm: (e: ChangeEvent) => void}> = ({name, initialValue, placeholder, fillForm}) => {

  switch(name) {
    case 'name': return <Input name={name} value={initialValue} placeholder={placeholder} onChange={fillForm} error={false} />
    case 'password': return <PasswordInput name={name} value={initialValue} placeholder={placeholder} onChange={fillForm} />
    case 'email': return <EmailInput name={name} value={initialValue} placeholder={placeholder} onChange={fillForm} />
    case 'token': return <Input name={name} value={initialValue} placeholder={placeholder} onChange={fillForm} />
    default: return <h3>No props</h3>
  }
}