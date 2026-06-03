// 8. Shopping Cart System
// Hooks
// useReducer
// useContext
// Problem Statement

// Build:

// add/remove products
// quantity updates
// coupon system
// total price calculations
// Real World Mapping

// Every e-commerce app.

// Important Learning
// Why useReducer scales better than multiple useStates.
// Bonus
// Persist cart to localStorage.


import { Cart } from './Pr16Cart'
import { Products } from './Pr16Products'

export const Practical16CartDemo = () => {
  return (
    <div className="border-2 border-black h-screen">
      <Cart />
      <Products />
    </div>
  )
}
