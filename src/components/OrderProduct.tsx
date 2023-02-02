import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import { ProductInterface } from '@interfaces/Product';
import Image from 'next/image';
import { useContext } from 'react';
import styles from '@styles/OrderProduct.module.scss';

const OrderProduct = ({ product }: { product: ProductInterface }) => {
  const { removeFromCart } = useContext<any>(AppContext);

  const handleRemoveProduct = (id: number) => {
    removeFromCart(id);
  };

  return (
    <div className={styles.OrderProduct}>
      <figure>
        <Image width={200} height={200} src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <Image width={20} height={20} className="close" src={close} alt="close" onClick={() => handleRemoveProduct(product.id)} />
    </div>
  );
};

export default OrderProduct;
