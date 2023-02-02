import { ReactNode } from 'react';
import styles from '@styles/ProductsCards.module.scss';

const ProductsCards = ({ children }: { children: ReactNode }) => {
  return <div className={styles.ProductsCards}>{children}</div>;
};

export default ProductsCards;
