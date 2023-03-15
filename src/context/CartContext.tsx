import { createContext, useState } from 'react'
import { type cartInterfaceContext, type SortContextProviderProps } from '../types.d'

export const CartContext = createContext<cartInterfaceContext>({
  cart: [{
    id: -1,
    image: '',
    price: 0,
    quantity: 0,
    title: ''
  }],
  setCart: () => {}
})

export const CartContextProvider = ({ children }: SortContextProviderProps): JSX.Element => {
  const [cart, setCart] = useState([{
    id: -1,
    image: '',
    price: 0,
    quantity: 0,
    title: ''
  }])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
