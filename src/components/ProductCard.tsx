import { type eCommerceItemInterface } from '../types.d'
import { CardIcons } from './CardIcons'

interface itemProps {
  item: eCommerceItemInterface
}

export const ProductCard = ({ item }: itemProps): JSX.Element => {
  return (
    <div className='grid grid-rows-[auto 1fr auto] w-72 h-full justify-center bg-white rounded-lg'>
      <p className='p-3 font-semibold text-lg'>{item.title}</p>
      <img
        src={item.image}
        alt={item.title}
        loading='lazy'
        className='w-64 p-2 h-64 object-contain place-self-center'/>
      <div className='flex justify-center items-center gap-x-3 pb-2 pt-2'>
        <p className='text-center font-semibold self-end'>{`$${item.price}`}</p>
          <CardIcons item={item}/>
      </div>
    </div>
  )
}
