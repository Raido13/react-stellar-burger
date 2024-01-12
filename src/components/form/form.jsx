import styles from './form.module.css';
import { useState } from "react";
import { Buttons } from '../buttons/buttons';

export const Form = ({onSubmit, entries, title, button}) => {
  const state = entries.reduce((obj, it) => ({...obj, [it.name]: it.initialValue}), {})
  const [formState, setFormState] = useState(state);
  const [isVisible, setIsVisible] = useState(false);

  const fillForm = e => {
    e.preventDefault();
    setFormState(prevState => ({...prevState, [e.target.name]: e.target.value}));
    if(title === null){
      state[e.target.name] === e.target.value
                  ? setIsVisible(!state[e.target.name] === e.target.value)
                  : setIsVisible(true)
    }
  }

  const submitForm = e => {
    e.preventDefault();
    onSubmit(formState);
  }

  const resetForm = e => {
    e.preventDefault();
    setFormState(state);
  }

  return (
    <form className={styles.form} onSubmit={submitForm} onReset={resetForm}>
      {title !== null && <h2 className={`text text_type_main-medium ${styles.title}`}>{title}</h2>}
      {entries.map(({name, placeholder, Field}, id) => (
        <Field key={id} name={name} value={formState[name]} onChange={fillForm} placeholder={placeholder} />
      ))}
      {title === null ? <Buttons button={button} isVisible={isVisible} /> : <Buttons button={button} />}
    </form>
  )
}