import { useContext /*, useEffect */ } from 'react'
import { IconCart } from '../assets/icons'
import { CartContext } from '../context/CartContext'

export const Navbar = (): JSX.Element => {
  const { cart } = useContext(CartContext)

  console.log(cart)
  return (
    <div className='bg-white flex items-center justify-between pr-5 pl-5'>
      <h1 className='pt-5 pb-5 text-3xl font-extrabold'>E-commerce</h1>
      <button>
        <IconCart viewBox='0 0 16 16' height={'32px'} width={'32px'}/>
      </button>
    </div>
  )
}
