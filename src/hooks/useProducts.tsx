import { useEffect, useState } from 'react'
import { getProducts } from '../services/getProducts'
import { type eCommerceItemsType, type eCommerceProductsState } from '../types.d'

export const useProducts = (): eCommerceProductsState => {
  const [eCommerceProducts, setEcommerceProducts] = useState<eCommerceItemsType | null>(null)

  useEffect(() => {
    let subscribed = true

    if (subscribed) {
      getProducts({ setEcommerceProducts })
    }

    return () => {
      subscribed = false
    }
  }, [])

  return ({ eCommerceProducts, setEcommerceProducts })
}
