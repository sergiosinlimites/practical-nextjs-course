import { useContext, useEffect, useState } from 'react';
import AppContext from '@context/AppContext';
import OrderProduct from '../components/OrderProduct';
import { ProductInterface } from '@interfaces/Product';
import flecha from '@icons/flechita.svg';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/OrderDetail.module.scss';

const OrderDetail = () => {
  const [accumulatedProducts, setAccumulatedProducts] = useState<ProductInterface[]>([]);
  const [total, setTotal] = useState<number>(0);
  const {
    state: { cart },
  } = useContext<any>(AppContext);

  const accumulateProducts = (products: ProductInterface[]) => {
    const arrangedProducts: ProductInterface[] = [];
    for (let product of products) {
      const freezedObject = Object.assign({}, product);
      const found = arrangedProducts.find((p) => p.id === freezedObject.id);
      if (found) {
        const index = arrangedProducts.indexOf(found);
        arrangedProducts[index].price += freezedObject.price;
      } else {
        arrangedProducts.push(freezedObject);
      }
    }
    return arrangedProducts;
  };

  const sumTotal = (products: any[]) => {
    const total = products.reduce((accumulator, product) => Number(accumulator) + Number(product.price), [0]);
    setTotal(total);
  };

  useEffect(() => {
    if (cart) {
      console.log('se actualiza');
      console.log(cart);
      const acumulated = accumulateProducts(cart);
      sumTotal(cart);
      setAccumulatedProducts(acumulated);
    }
  }, [cart]);

  return (
    <aside className={styles.OrderDetail}>
      <div className={styles['title-container']}>
        <Image width={20} height={20} src={flecha} alt="arrow" />
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {accumulatedProducts.map((product, index) => (
          <OrderProduct product={product} key={`${index}-orderItem-${product.id}`} />
        ))}
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${total}</p>
        </div>
        <Link className={styles['primary-button']} href="/checkout">
          Checkout
        </Link>
      </div>
    </aside>
  );
};

export default OrderDetail;
