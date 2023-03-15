import { IconCart, IconCloseO } from '../assets/icons'

interface Props {
  showCart: boolean
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export const Navbar = ({ showCart, setShowCart }: Props): JSX.Element => {
  return (
    <div className='bg-white flex items-center justify-between pr-5 pl-5 h-20'>
      <h1 className='pt-5 pb-5 text-3xl font-extrabold'>E-commerce</h1>
      <button
        onClick={() => { setShowCart((prev) => { return (!prev) }) }}
        >
          {showCart
            ? <IconCloseO viewBox='2 1 20 22' height={'32px'} width={'32px'}/>
            : <IconCart viewBox='0 0 16 16' height={'32px'} width={'32px'}/>
          }
      </button>
    </div>
  )
}
