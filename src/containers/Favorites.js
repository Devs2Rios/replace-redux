import { useStore } from '../store/store';
import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

const Favorites = () => {
  const { products } = useStore()[0],
    favoriteProducts = products.filter(p => p.isFav);

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(p => (
          <FavoriteItem
            key={p.id}
            id={p.id}
            title={p.title}
            description={p.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
