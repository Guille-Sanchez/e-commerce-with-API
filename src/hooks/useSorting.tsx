import { useContext, useEffect, useRef, useState } from 'react'
import { SortByContext } from '../context/SortContext'
import { sortProducts } from '../logic/sortProducts'
import { type eCommerceItemsType, type eCommerceProductsState } from '../types.d'

export const useSorting = ({ eCommerceProducts, setEcommerceProducts }: eCommerceProductsState): void => {
  const { sortBy } = useContext(SortByContext)
  const [originalProducts, setOriginalProducts] = useState<eCommerceItemsType | null>(null)
  const firstRender = useRef(true)

  useEffect(() => {
    let subscribed = true

    if (subscribed && (eCommerceProducts != null)) {
      if (firstRender.current) { // For this particular case, saves the products so as not to make multiple request.
        firstRender.current = false
        setOriginalProducts(() => [...eCommerceProducts])
      }

      sortProducts({ sortBy, setEcommerceProducts, originalProducts }) // This must be async, or in first render it does not work
    }
    return () => {
      subscribed = false
    }
  }, [sortBy.category, sortBy.minPrice])
}
