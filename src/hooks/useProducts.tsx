import { useEffect, useState } from 'react'
import { eCommerceItems } from '../mockups/eCommerceItems'
import { type eCommerceItemsType, type eCommerceProductsState } from '../types.d'

export const useProducts = (): eCommerceProductsState => {
  const [eCommerceProducts, setEcommerceProducts] = useState<eCommerceItemsType | null>(null)

  useEffect(() => {
    let subscribed = true

    if (subscribed) {
      // Get value from API
      setEcommerceProducts(() => [...eCommerceItems])
    }

    return () => {
      subscribed = false
    }
  }, [])

  return ({ eCommerceProducts, setEcommerceProducts })
}
