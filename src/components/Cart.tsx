import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { IconAdd, IconCartX, IconSubtractLine } from '../assets/icons'

interface Props {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export const Cart = ({ setShowCart }: Props): JSX.Element => {
  const { cart, setCart } = useContext(CartContext)

  return (
    <div className='absolute inset-0 top-20 bg-black bg-opacity-30 z-10'>
        <button onClick={() => { setShowCart((prev) => { return (!prev) }) }}>
          <IconCartX />
        </button>
      <div className='mr-5 ml-5'>
        <table className='table-fixed bg-white w-full rounded-md'>

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
                          className='w-5 object-contain'
                          />
                          <IconCartX />
                      </div>
                    </th>
                    <th>
                      <p className='truncate w-20'>{product.title}</p>
                    </th>
                    <th>
                      <form>
                        <div>
                          <button><IconSubtractLine/></button>
                            <input
                              onChange={(event) => {
                                const value = event.currentTarget.value
                                const currentProduct = { ...product, quantity: Number(value) }
                                cart.splice((index + 1), 1, { ...currentProduct })
                                setCart(() => {
                                  return ([...cart])
                                })
                              }}
                              value={product.quantity}
                              className='w-5'/>
                          <button><IconAdd/></button>
                        </div>
                      </form>
                    </th>
                    <th>$ {product.quantity * product.price}</th>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
