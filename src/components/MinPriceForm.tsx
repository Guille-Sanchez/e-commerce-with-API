import { type setSortByType, type sortByInterface } from '../types.d'

interface Props {
  setSortBy: setSortByType
  sortBy: sortByInterface
}

export const MinPriceForm = ({ setSortBy, sortBy }: Props): JSX.Element => {
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
