import styles from './err404.module.css';

export const Err404 = () => {
  return (
    <div className={styles.err404}>
      <p className={`text text_type_digits-large`}>404</p>
      <p className={`text text_type_digits-medium`}>Page Not Found</p>
    </div>
  )
}