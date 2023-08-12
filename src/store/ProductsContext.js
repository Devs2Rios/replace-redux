import { useState, createContext } from "react";
import { products as _products } from "../utils/data";

export const ProductContext = createContext({
    products: [],
    toggleFav: () => { }
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(_products),
        toggleFav = (id) => setProducts(prevProds => {
            const i = prevProds.findIndex(p => p.id === id);
            if (i === -1) return prevProds;
            prevProds[i].isFav = !prevProds[i].isFav;
            return [...prevProds];
        });

    return (
        <ProductContext.Provider value={{ products, toggleFav }}>
            {children}
        </ProductContext.Provider>
    );
}

