import { useContext } from 'react';
import { ProductContext } from '../store/ProductsContext';
import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = () => {
  const { products } = useContext(ProductContext);
  return (
    <ul className="products-list">
      {products.map(p => (
        <ProductItem
          key={p.id}
          id={p.id}
          title={p.title}
          description={p.description}
          isFav={p.isFav}
        />
      ))}
    </ul>
  );
};

export default Products;
