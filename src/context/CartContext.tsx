import { createContext, useState } from 'react'
import { type SortContextProviderProps } from '../types.d'

export interface cartInterface {
  id: number
  image: string
  price: number
  quantity: number
  title: string
}

interface cartInterfaceContext {
  cart: cartInterface[]
  setCart: React.Dispatch<React.SetStateAction<cartInterface[]>>
}

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
