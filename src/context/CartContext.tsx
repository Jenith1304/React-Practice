import { createContext, useReducer } from "react";
import { cartReducer } from "../reducer/reducer";
import { productData } from "../data/productData";

const CartContext = createContext();
const initialState = {
    items: [],
    total: 0,
}
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState, () => {
        const localData = localStorage.getItem('cartState');
        if (localData) {
            return JSON.parse(localData);
        }
        // If nothing in localStorage, use initialState
        localStorage.setItem('cartState', JSON.stringify(initialState));
        return initialState;
    });
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}
export { CartContext, CartProvider };