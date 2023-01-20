import { useContext, useEffect, useState } from 'react';
import AppContext from '@context/AppContext';
import OrderProduct from '../components/OrderProduct';
import { Product } from '@interfaces/Product';
import flecha from '@icons/flechita.svg';
import styles from '@styles/OrderDetail.module.scss';

const OrderDetail = () => {
  const [accumulatedProducts, setAccumulatedProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const {
    state: { cart },
  } = useContext(AppContext);

  const accumulateProducts = (products: Product[]) => {
    const arrangedProducts: Product[] = [];
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
      <div className="title-container">
        <img src={flecha} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {accumulatedProducts.map((product, index) => (
          <OrderProduct product={product} key={`${index}-orderItem-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${total}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default OrderDetail;
