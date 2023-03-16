import { type cartInterface } from '../types.d'

interface OnClickQuantity {
  cart: cartInterface[]
  setCart: React.Dispatch<React.SetStateAction<cartInterface[]>>
  clickValue: number
  product: cartInterface
  index: number
}

export const handleOnClickToChangeQuantity = ({ cart, setCart, clickValue, product, index }: OnClickQuantity): void => {
  const value = product.quantity + clickValue

  if (value < 0) return
  const currentProduct = { ...product, quantity: Number(value) }
  cart.splice((index + 1), 1, { ...currentProduct })
  setCart(() => {
    return ([...cart])
  })
}
