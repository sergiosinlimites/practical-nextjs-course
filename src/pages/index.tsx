import ProductsList from '@containers/ProductsList';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <ProductsList />
    </>
  );
}
