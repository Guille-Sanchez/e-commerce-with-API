import { CategoryForm } from './components/CategoryForm'
import { EcommerItems } from './components/EcommerItems'
import { MinPriceForm } from './components/MinPriceForm'
import { SortContextProvider } from './context/SortContext'

function App (): JSX.Element {
  return (
    <div className='bg-indigo-900 min-w-full min-h-full font'>
      <h1 className='bg-white pt-5 pb-5 text-3xl font-extrabold'>E-commerce</h1>
      <SortContextProvider>
        <CategoryForm />
        <MinPriceForm />
        <EcommerItems />
      </SortContextProvider>
    </div>
  )
}

export default App
