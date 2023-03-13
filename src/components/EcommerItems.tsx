import IconCart from '../assets/icons'
import { useProducts } from '../hook/useProducts'
import { useSorting } from '../hook/useSorting'

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

            <div className='grid grid-rows-[auto 1fr auto] w-72 h-full justify-center bg-white rounded-lg'>
              <p className='p-3 font-semibold text-lg'>{item.title}</p>
              <img
                src={item.image}
                alt={item.title}
                loading='lazy'
                className='w-64 p-2 h-64 object-contain place-self-center'/>
              <div className='flex justify-center items-center gap-x-3 pb-2 pt-2'>
                <p className='text-center font-semibold self-end'>{`$${item.price}`}</p>
                <button className='hover:opacity-50'>
                  <IconCart viewBox={'0 0 16 16'} width={'25px'} height={'25px'}/>
                </button>
              </div>
            </div>

          </div>
        )
      })}
    </div>
  </div>
  )
}
