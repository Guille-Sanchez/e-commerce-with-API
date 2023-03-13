import { useContext } from 'react'
import { SortByContext } from '../context/SortContext'

export const MinPriceForm = (): JSX.Element => {
  const { sortBy, setSortBy } = useContext(SortByContext)

  return (
    <div>
        <form>
          <label htmlFor="range">Select minimum Price:</label>
          <input type="range" id='range' min={0} max={1000}
             onChange={(e) => {
               setSortBy((prev) => {
                 return ({ ...prev, minPrice: +e.target.value })
               })
             }}
            />
          <span>Value: {sortBy.minPrice}</span>
        </form>
      </div>
  )
}
