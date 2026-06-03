export function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            {
                const newItems = action.payload;
                const newTotal = state.total + newItems.price;
                localStorage.setItem('cartState', JSON.stringify({
                    items: [...state.items, newItems],
                    total: newTotal,
                }))
                return {
                    items: [...state.items, newItems],
                    total: newTotal,
                }
            }
        case 'REMOVE_ITEM':
            {
                const itemId = action.payload;
                const index = state.items.findIndex(item => item.id === itemId);

                if (index === -1) return state;

                const newItems = [...state.items];
                const removedItem = newItems.splice(index, 1)[0]; // remove one occurrence
                const newTotal = state.total - removedItem.price;

                const newState = { items: newItems, total: newTotal };
                localStorage.setItem('cartState', JSON.stringify(newState));
                return newState;
            }

    }
}