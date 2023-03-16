import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { ChangeQuantity } from './ChangeQuantity'
import { IconCartX } from '../assets/icons'
import { useTotalAmountToPay } from '../hooks/useTotalAmountToPay'

export const Cart = (): JSX.Element => {
  const { cart, setCart } = useContext(CartContext)

  return (
    <div className='absolute top-20 inset-0 bg-black bg-opacity-30 z-10'>
      <div className='relative mr-5 ml-5 p-5 bg-white grid gap-y-5 rounded-b-lg'>
        {[...cart].slice(1).map((product, index) => {
          return (
            <div key={product.id}>
              <div className='flex gap-x-5'>
                <img className='h-16 object-contain' src={product.image} alt={product.title} />

                <div>
                  <div className='flex w-full justify-between'>
                    <p className='truncate w-40'>{product.title}</p>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        const currentCart = [...cart]
                        currentCart.splice((index + 1), 1)
                        setCart(() => [...currentCart])
                      }}
                    >
                      <IconCartX fill='red' viewBox='0 0 20 20' height='25px' width='25px'/>
                    </button>
                  </div>

                  <div className='flex w-full gap-x-3'>
                    <div className='flex flex-col items-center'>
                      <p className='font-bold'>Quantity</p>
                      <ChangeQuantity product={product} index={index} />
                    </div>

                    <div className='flex flex-col items-center'>
                      <p className='font-bold'>Per Unit</p>
                      <p>{product.price}</p>
                    </div>

                    <div className='flex flex-col items-center'>
                      <p className='font-bold'>Subtotal</p>
                      <p>{(product.price * product.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
            </div>
          )
        })}

        <div className='flex w-full justify-between'>
          <p className='font-bold'>Total:</p>
          <p className='font-bold'>{useTotalAmountToPay()}</p>
        </div>

        <div className='w-full flex justify-center'>
          <button className='bg-indigo-900 font-bold text-slate-200 rounded-lg w-56 pt-2 pb-2 hover:brightness-150'>
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
