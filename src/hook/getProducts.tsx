import { useEffect } from 'react'
import { eCommerceItems } from '../mockups/eCommerceItems'
import { type eCommerceItemsType } from '../types.d'

export const getProducts = (): eCommerceItemsType => {
  useEffect(() => {
    let subscribed = true

    if (subscribed) {
      // Get value from API
      console.log('hola')
    }

    return () => {
      subscribed = false
    }
  }, [])

  return (eCommerceItems)
}
