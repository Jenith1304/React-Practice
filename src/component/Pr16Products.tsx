import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { productData } from '../data/productData';

export const Products = () => {
    const { state, dispatch } = useContext(CartContext);
    const isInCart = (id) => state.items.some((item) => item.id === id);
    console.log(state);
    return (
        <div>
            <h1>Products</h1>
            <h2>Total: ${state.total.toFixed(2)}</h2>
            {productData.map((item) => (
                <div key={item.id} className="border-2 border-red-500 p-4">
                    <p>{item.name} - ${item.price}</p>
                    <button
                        onClick={() => dispatch({ type: 'ADD_ITEM', payload: { id: item.id + item.name, ...item } })}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Add to Cart
                    </button>
                    {isInCart(item.id) && (
                        <button
                            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                            className="bg-red-500 text-white p-2 rounded"
                        >
                            Remove from Cart
                        </button>
                    )}
                </div>
            ))}
        </div>
    )
}
