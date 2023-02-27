import styles from './input.module.scss';
import { Link } from 'react-router-dom';
/* eslint-disable-next-line */
export interface InputProps {
  text:string
}

export function Input(props: InputProps) {
  return (
    <div className={styles['container']}>
      <Link to='/'><h1>Welcome to Input!</h1></Link>
    </div>
  );
}

export default Input;
