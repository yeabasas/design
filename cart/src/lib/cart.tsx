import styles from './cart.module.scss';
import { Sidebar } from '@design/shared/ui';

/* eslint-disable-next-line */
export interface RoutesCartProps {}

export function RoutesCart(props: RoutesCartProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Cart!</h1>
      <Sidebar/>
    </div>
    
  );
}

export default RoutesCart;