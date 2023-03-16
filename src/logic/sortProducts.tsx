import { eCommerceItems } from '../mockups/eCommerceItems'
import { type sortProductsProps } from '../types.d'

export const sortProducts = ({ sortBy, setEcommerceProducts, originalProducts }: sortProductsProps): void => {
  const displayProducts = originalProducts != null ? originalProducts : eCommerceItems

  setEcommerceProducts(() =>
    displayProducts.filter((product) => {
      return (
        ((sortBy.category === 'All') ? true : (product.category === sortBy.category)) &&
          product.price >= sortBy.minPrice
      )
    })
  )
}
