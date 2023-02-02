import close from '@icons/icon_close.png';
import ProductInfo from './ProductInfo';
import Image from 'next/image';
import styles from '@styles/ProductDetail.module.scss';

const ProductDetail = () => {
  return (
    <aside className={styles.ProductDetail}>
      <div className={styles['ProductDetail-close']}>
        <Image width={200} height={200} src={close} alt="close" />
      </div>
      <Image width={200} height={200} src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
