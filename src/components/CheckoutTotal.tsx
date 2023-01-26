import styles from '@styles/CheckoutTotal.module.scss';

const CheckoutTotal = () => {
  return (
    <div className={styles.CheckoutTotal}>
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
    </div>
  );
};

export default CheckoutTotal;
