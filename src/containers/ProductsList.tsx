import Product from "../components/Product";
import '@styles/ProductsList.scss';
import useGetProducts from "@hooks/useGetProducts";

const API = 'https://api.escuelajs.co/api/v1';

const ProductsList = () => {
  const products = useGetProducts(API);

  return (
    <div className="ProductsList">
      {
        products.map(product => <Product product={product} key={`product-${product.id}`} />)
      }
    </div>
  );
}

export default ProductsList;