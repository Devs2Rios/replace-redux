import { useState, createContext } from "react";
import { products as _products } from "../utils/data";

export const ProductContext = createContext({
    products: [],
    setProducts: () => { },
    toggleFav: () => { }
});

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(_products),
        toggleFav = (id) => setProducts(prevProds => {
            prevProds.find(p => p.id === id).isFav = !prevProds.find(p => p.id === id).isFav;
            return [...prevProds];
        });

    return (
        <ProductContext.Provider value={{ products, setProducts, toggleFav }}>
            {children}
        </ProductContext.Provider>
    );
}

