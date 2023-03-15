import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { IconAdd, IconCartX, IconSubtractLine } from '../assets/icons'
import { type handleOnClickCartInterface } from '../types.d'

interface Props {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export const Cart = ({ setShowCart }: Props): JSX.Element => {
  const { cart, setCart } = useContext(CartContext)

  const handleOnClick = ({ clickValue, product, index }: handleOnClickCartInterface): void => {
    const value = product.quantity + clickValue
    if (value < 0) return
    const currentProduct = { ...product, quantity: Number(value) }
    cart.splice((index + 1), 1, { ...currentProduct })
    setCart(() => {
      return ([...cart])
    })
  }

  return (
    <div className='absolute inset-0 top-20 bg-black bg-opacity-30 z-10'>
        <button onClick={() => { setShowCart((prev) => { return (!prev) }) }}>
          <IconCartX />
        </button>
      <div className='mr-5 ml-5'>
        <table className='table-fixed bg-white w-full rounded-t-md'>

          <thead className='pt-50'>
            <tr>
              <th className='max-w-min'>Image</th>
              <th>Items</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {
              (cart.slice(1)).map((product, index) => {
                return (
                  <tr key={product.id} className=''>
                    <th>
                      <div className='flex items-center gap-2 justify-center'>
                        <img
                          src={product.image}
                          alt={product.title}
                          className='w-7 object-contain'
                          />
                      </div>
                    </th>
                    <th>
                      <p className='truncate w-20'>{product.title}</p>
                    </th>
                    <th>
                      <form>
                        <div>
                          <button onClick={(e) => {
                            e.preventDefault()
                            const clickValue: number = -1
                            handleOnClick({ clickValue, product, index })
                          }}>
                            <IconSubtractLine/>
                          </button>
                            <input
                              value={product.quantity}
                              className='w-5'
                              readOnly
                              />

                          <button onClick={(e) => {
                            e.preventDefault()
                            const clickValue: number = 1
                            handleOnClick({ clickValue, product, index })
                          }}>
                            <IconAdd/>
                          </button>
                        </div>
                      </form>
                    </th>
                    <th>$ {(product.quantity * product.price).toFixed(2)}</th>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <hr />
        <table className='table-fixed bg-white w-full rounded-b-md'>
          <tr>
            <th>Total amount to pay:</th>
            <th className='text-right pr-5'>$
              {
                ([...cart].splice(1).map((product) => {
                  return (product.price * product.quantity)
                })).reduce((accumulator, currentValue) => (accumulator += currentValue), 0).toFixed(2)
              }
            </th>
            </tr>
        </table>
      </div>
    </div>
  )
}
