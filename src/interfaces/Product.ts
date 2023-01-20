import { Category } from './Category';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string | Date;
  updatedAt: string | Date;
  category: Category;
}
