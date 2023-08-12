import { initStore } from './store';
import { products } from '../utils/data';

export const configureStore = () => {
    const actions = {
        TOGGLE_FAV: (currState, id) => {
            const i = currState.products.findIndex(p => p.id === id);
            if (i === -1) return currState;
            currState.products[i].isFav = !currState.products[i].isFav;
            return { ...currState, products: [...currState.products] };
        },
    };
    initStore(actions, { products });
};