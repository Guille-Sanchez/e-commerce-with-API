import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const useTotalAmountToPay = (): string => {
  const { cart } = useContext(CartContext)
  const subTotalArray = [...cart].splice(1).map((product) => {
    return (product.price * product.quantity)
  })
  const totalAmount = subTotalArray.reduce((accumulator, currentValue) => (accumulator += currentValue), 0).toFixed(2)

  return (totalAmount)
}
