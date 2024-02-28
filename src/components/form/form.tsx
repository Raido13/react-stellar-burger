import styles from './form.module.css';
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Buttons } from '../buttons/buttons';
import { IField } from '../../services/types';

export const Form: FC<{onSubmit: (formState : {[key: string]: string}) => void, entries: IField[], title: string | null | undefined, button: string}> = ({onSubmit, entries, title, button}) => {
  const state : {[key: string] : string} = entries.reduce((obj, it) => ({...obj, [it.name]: it.initialValue}), {})
  const [formState, setFormState] = useState(state);
  const [isVisible, setIsVisible] = useState(false);

  const fillForm = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormState(prevState => ({...prevState, [e.target.name]: e.target.value}));
    if(title === null) {
      state[e.target.name] === e.target.value
                  ? setIsVisible(false)
                  : setIsVisible(true)
    }
  }

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formState);
  }

  const resetForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(title === null){
      setIsVisible(false)
    }
    setFormState(state);
  }

  return (
    <form className={styles.form} onSubmit={submitForm} onReset={resetForm}>
      {title !== null && <h2 className={`text text_type_main-medium ${styles.title}`}>{title}</h2>}
      {entries.map(({name, placeholder, Field}, id) => (
        <Field key={id} name={name} initialValue={formState[name]} fillForm={fillForm} placeholder={placeholder} />
      ))}
      {title === null ? <Buttons button={button} isVisible={isVisible} /> : <Buttons button={button} isVisible={undefined} />}
    </form>
  )
}