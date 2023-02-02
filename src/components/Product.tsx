import React, { useContext, useEffect } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';
import { ProductInterface } from 'interfaces/Product';
import styles from '@styles/Product.module.scss';

const Product = ({ product }: { product: ProductInterface }) => {
  const { addToCart } = useContext<any>(AppContext);

  useEffect(() => {
    // console.log('el producto modificado', product);
  }, [product]);

  const handleClick = (item: ProductInterface) => {
    addToCart(item);
  };

  return (
    <div className={styles.Product}>
      {/* <Image src={product.images[0]} width={300} height={240} alt={product.title} /> */}
      <div className={styles['Product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <figure onMouseDown={() => handleClick(product)}>
          <Image className={styles['product-image']} src={addToCartImage} width={20} height={30} alt="add to cart" />
        </figure>
      </div>
    </div>
  );
};

export default Product;
