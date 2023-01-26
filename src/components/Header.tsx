import React, { useState, useContext } from 'react';
import AppContext from '@context/AppContext';
import Menu from '@components/Menu';
import Link from 'next/link';
import Image from 'next/image';
import OrderDetail from '@containers/OrderDetail';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import cartImage from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);
  const {
    state: { cart },
  } = useContext<any>(AppContext);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleToggleOrder = () => {
    setToggleOrder(!toggleOrder);
  };
  const verifyCartNumber = (length: number) => {
    return length <= 9 ? length : '+9';
  };
  return (
    <>
      <nav className={styles.Header}>
        <Image width={20} height={20} src={menu} alt="menu" className={styles.menu} />
        <div className={styles['navbar-left']}>
          <Link href="/">
            <Image width={20} height={20} src={logo} alt="logo" className={styles.logo} />
          </Link>
          <ul>
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li className={styles['navbar-email']} onClick={handleToggle}>
              platzi@example.com
            </li>
            <li className={styles['navbar-shopping-cart']} onClick={handleToggleOrder}>
              <Image src={cartImage} alt="shopping cart" />
              {cart.length > 0 && <div>{verifyCartNumber(cart.length)}</div>}
            </li>
          </ul>
        </div>
        {toggle && <Menu />}
        {toggleOrder && <OrderDetail />}
      </nav>
    </>
  );
};
export default Header;
