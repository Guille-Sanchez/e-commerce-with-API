import { useState } from 'react'
import { CategoryForm } from './components/CategoryForm'
import { EcommerItems } from './components/EcommerItems'
import { MinPriceForm } from './components/MinPriceForm'

function App (): JSX.Element {
  const [sortBy, setSortBy] = useState({
    category: 'All',
    minPrice: 0
  })

  return (
    <div className='bg-indigo-900 min-w-full min-h-full font'>
      <h1 className='bg-white pt-5 pb-5 text-3xl font-extrabold'>E-commerce</h1>
      <CategoryForm setSortBy={setSortBy} />
      <MinPriceForm sortBy={sortBy} setSortBy={setSortBy} />
      <EcommerItems sortBy={sortBy} />
    </div>
  )
}

export default App
