import { useEffect, useState } from 'react'
import { eCommerceItems } from '../mockups/eCommerceItems'
// import { getProducts } from '../services/getProducts'
import { type eCommerceItemsType, type eCommerceProductsState } from '../types.d'

export const useProducts = (): eCommerceProductsState => {
  const [eCommerceProducts, setEcommerceProducts] = useState<eCommerceItemsType | null>(null)

  useEffect(() => {
    let subscribed = true

    if (subscribed) {
      setEcommerceProducts(() => eCommerceItems)
      // If you want to connect to the API, comment previous line and uncomment line below
      // getProducts({ setEcommerceProducts })
    }

    return () => {
      subscribed = false
    }
  }, [])

  return ({ eCommerceProducts, setEcommerceProducts })
}
