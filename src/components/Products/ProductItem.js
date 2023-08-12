import { memo } from 'react';
import { useStore } from '../../store/store';
import Card from '../UI/Card';
import './ProductItem.css';

const ProductItem = memo(({ id, title, description, isFav }) => {
  console.log('Rendering');
  const dispatch = useStore(false)[1],
    toggleFav = () => dispatch('TOGGLE_FAV', id);

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={isFav ? 'is-fav' : ''}>{title}</h2>
        <p>{description}</p>
        <button
          className={!isFav ? 'button-outline' : ''}
          onClick={toggleFav}
        >
          {isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
