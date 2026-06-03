import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
    const { state } = useContext(CartContext);
    return (
        <div>
            <p>🛒{state.items.length}</p>
        </div>
    )
}
