import CheckoutItem from '@components/CheckoutItem';
import CheckoutTotal from '@components/CheckoutTotal';
import styles from '@styles/CheckoutContainer.module.scss';

const CheckoutContainer = () => {
  return (
    <div className={styles.CheckoutContainer}>
      <div className={styles['CheckoutContainer-container']}>
        <h1 className={styles.title}>My order</h1>
        <div className={styles['CheckoutContainer-content']}>
          <CheckoutTotal />
          <CheckoutItem />
        </div>
      </div>
    </div>
  );
};

export default CheckoutContainer;
