import addToCart from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';
import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = () => {
  return (
    <div className={styles.ProductInfo}>
      <p>$35,00</p>
      <p>Bike</p>
      <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
      <button className={styles['add-to-cart-button']}>
        <Image width={200} height={200} src={addToCart} alt="add to cart" />
        Add to cart
      </button>
    </div>
  );
};

export default ProductInfo;
