import { useContext, useEffect, useState } from 'react'
import { IconCart, IconCartCheckFill } from '../assets/icons'
import { CartContext } from '../context/CartContext'
import { type eCommerceItemInterface } from '../types.d'

interface itemProps {
  item: eCommerceItemInterface
}

export const CardIcons = ({ item }: itemProps): JSX.Element => {
  const { cart, setCart } = useContext(CartContext)
  const [product, setProduct] = useState({
    isNotSelected: true,
    id: item.id
  })

  useEffect(() => {
    let subscribed = true
    if (subscribed) {
      const cartIdsArray: number[] = []
      // If the items being displayed changed, it checks the icons to place the correct ones
      cart.forEach((productInCart) => {
        cartIdsArray.push(productInCart.id)
        if (productInCart.id === product.id) {
          setProduct((prev) => { return ({ ...prev, isNotSelected: false }) })
        }
      })

      if (!cartIdsArray.includes(product.id)) {
        setProduct((prev) => { return ({ ...prev, isNotSelected: true }) })
      } else {
        setProduct((prev) => { return ({ ...prev, isNotSelected: false }) })
      }
    }

    return () => {
      subscribed = false
    }
  }, [cart])

  return (
    <>
    {
      product.isNotSelected
        ? <button // Saves the product in card context
            className='hover:opacity-50'
            onClick={(e) => {
              e.preventDefault()
              setCart((prev) => {
                return (
                  [
                    ...prev,
                    {
                      id: item.id,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      title: item.title
                    }
                  ]
                )
              })
              setProduct((prev) => { return { ...prev, isNotSelected: false } })
            }}
          >
            <IconCart viewBox={'0 0 16 16'} width={'25px'} height={'25px'}/>
          </button>

        : <button // removes product from card
            className='hover:opacity-50'
            onClick={() => {
              const currentCart = [{
                id: -1,
                image: '',
                price: 0,
                quantity: 0,
                title: ''
              }]

              cart.forEach((prop) => {
                if (product.id === prop.id || prop.id === -1) return

                currentCart.push(prop)
              })
              setCart(() => { return ([...currentCart]) })
              setProduct((prev) => { return { ...prev, isNotSelected: true } })
            }}
          >
            <IconCartCheckFill viewBox={'0 0 16 16'} width={'25px'} height={'25px'}/>
        </button>
    }
    </>
  )
}
