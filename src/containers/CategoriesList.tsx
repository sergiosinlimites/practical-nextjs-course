import Link from 'next/link';

const CategoriesList = () => {
  return (
    <ul>
      <li>
        <Link href="/">CATEGORIES</Link>
      </li>
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
        <Link href="/">Furniture</Link>
      </li>
      <li>
        <Link href="/">Toys</Link>
      </li>
      <li>
        <Link href="/">Other</Link>
      </li>
    </ul>
  );
};

export default CategoriesList;
