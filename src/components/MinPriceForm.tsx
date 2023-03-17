import { useContext } from 'react'
import { SortByContext } from '../context/SortContext'

export const MinPriceForm = (): JSX.Element => {
  const { sortBy, setSortBy } = useContext(SortByContext)

  return (
    <div className='min-w-full flex justify-center'>
      <form className='flex items-center justify-between gap-2 pt-5'>
        <label className='text-slate-200 font-semibold self-start' htmlFor="range">
          Min. price:
        </label>
        <div>
          <input
            type="range"
            id='range'
            className='max-w-[150px]'
            min={0}
            max={1000}
            onChange={(e) => {
              setSortBy((prev) => {
                return ({ ...prev, minPrice: +e.target.value })
              })
            }}
            />
        </div>
          <p className='text-slate-200 font-semibold text-right'>
            $ {sortBy.minPrice}
          </p>
      </form>
    </div>
  )
}
