import React, { useContext } from 'react'
import { IconAdd, IconSubtractLine } from '../assets/icons'
import { CartContext } from '../context/CartContext'
import { handleOnClickToChangeQuantity } from '../logic/handleOnClickToCHangeQuantity'
import { type cartInterface } from '../types.d'

interface Props {
  product: cartInterface
  index: number
}

export const ChangeQuantity = ({ product, index }: Props): JSX.Element => {
  const { cart, setCart } = useContext(CartContext)
  return (
    <div>
      <button onClick={(e) => {
        e.preventDefault()
        const clickValue: number = -1
        handleOnClickToChangeQuantity({ cart, setCart, clickValue, product, index })
      }}>
      <IconSubtractLine/>
      </button>
      <input
      value={product.quantity}
      className='w-5 text-center font-normal'
      readOnly
      />
      <button onClick={(e) => {
        e.preventDefault()
        const clickValue: number = 1
        handleOnClickToChangeQuantity({ cart, setCart, clickValue, product, index })
      }}>
      <IconAdd/>
      </button>
    </div>
  )
}
