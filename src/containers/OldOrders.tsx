import { ReactNode } from 'react';
import styles from '@styles/OldOrders.module.scss';

const OldOrders = ({ children }: { children: ReactNode }) => {
  return <div className={styles.OldOrders}>{children}</div>;
};

export default OldOrders;
