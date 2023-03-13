import { type sortProductsProps } from '../types.d'

export const sortProducts = ({ sortBy, setEcommerceProducts, originalProducts }: sortProductsProps): void => {
  if (originalProducts == null) return
  setEcommerceProducts(() =>
    originalProducts.filter((product) => {
      return (
        ((sortBy.category === 'All') ? true : (product.category === sortBy.category)) &&
          product.price >= sortBy.minPrice
      )
    })
  )
}
