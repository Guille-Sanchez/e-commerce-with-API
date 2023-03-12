import { useState } from 'react'
import { CategoryForm } from './components/CategoryForm'
import { EcommerItems } from './components/EcommerItems'

function App (): JSX.Element {
  const [sortBy, setSortBy] = useState({
    category: 'All',
    minPrice: 0
  })

  return (
    <div className='bg-indigo-900 w-full h-full font'>
      <h1 className='bg-white pt-5 pb-5 text-3xl font-extrabold'>E-commerce</h1>
      <CategoryForm setSortBy={setSortBy}/>
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
      <EcommerItems sortBy={sortBy} />
    </div>
  )
}

export default App
