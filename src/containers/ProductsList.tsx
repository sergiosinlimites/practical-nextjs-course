import Product from '@components/Product';
import { ProductInterface } from '@interfaces/Product';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductsList.module.scss';

const API = 'https://api.escuelajs.co/api/v1';

const ProductsList = () => {
  const products = useGetProducts(API);

  return (
    <div className={styles.ProductsList}>
      {products.map((product: ProductInterface) => (
        <Product product={product} key={`product-${product.id}`} />
      ))}
    </div>
  );
};

export default ProductsList;
