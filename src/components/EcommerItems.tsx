import { useProducts } from '../hooks/useProducts'
import { useSorting } from '../hooks/useSorting'
import { ProductCard } from './ProductCard'

export const EcommerItems = (): JSX.Element => {
  const { eCommerceProducts, setEcommerceProducts } = useProducts()
  useSorting({ eCommerceProducts, setEcommerceProducts })

  if (eCommerceProducts == null) {
    return (
    <p>loading</p>
    )
  }

  return (
    <div className='grid justify-center'>
    <div className='grid sm:grid-cols-2 min-[950px]:grid-cols-3 justify-center w-screen max-w-[1100px] gap-y-5 mt-5 mb-5'>
      {eCommerceProducts.map((item) => {
        return (
          <div key={item.id} className='justify-self-center'>
            <ProductCard item={item} />
          </div>
        )
      })}
    </div>
  </div>
  )
}
