import React, { useContext, useEffect } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import '@styles/Product.scss';
import { Product as Prod, Product } from 'interfaces/Product';

const ProductComponent = ({ product }: { product: Prod }) => {
  const { addToCart } = useContext<any>(AppContext);

  useEffect(() => {
    // console.log('el producto modificado', product);
  }, [product]);

  const handleClick = (item: Prod) => {
    addToCart(item);
  };

  return (
    <div className="Product">
      <img src={product.images[0]} alt={product.title} />
      <div className="Product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)} onKeyDown={handleClick(product)}>
          <img src={addToCartImage} alt="add to cart" />
        </figure>
      </div>
    </div>
  );
};

export default Product;
