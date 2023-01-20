import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import { Product } from '@interfaces/Product';
import { useContext } from 'react';
import styles from '@styles/OrderProduct.module.scss';

const OrderProduct = ({ product }: { product: Product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemoveProduct = (id: number) => {
    removeFromCart(id);
  };

  return (
    <div className={styles.OrderProduct}>
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img className="close" src={close} alt="close" onClick={() => handleRemoveProduct(product.id)} />
    </div>
  );
}

export default OrderProduct;