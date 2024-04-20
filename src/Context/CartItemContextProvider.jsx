import React from 'react'
import Cart from './CartContext'
const CartItemContextProvider = ({children}) => {
    const [cart,setCart]=React.useState([])
  return (
    <Cart.Provider value={{cart,setCart}}>
      {children}
    </Cart.Provider>
  )
}

export default CartItemContextProvider
