import { CategoryForm } from './components/CategoryForm'
import { EcommerItems } from './components/EcommerItems'
import { MinPriceForm } from './components/MinPriceForm'
import { Navbar } from './components/Navbar'
import { CartContextProvider } from './context/CartContext'
import { SortContextProvider } from './context/SortContext'

function App (): JSX.Element {
  return (
    <CartContextProvider>
      <Navbar />

      <main className='bg-indigo-900 min-w-full min-h-full font'>
        <SortContextProvider>
          <CategoryForm />
          <MinPriceForm />
          <EcommerItems />
        </SortContextProvider>
      </main>
    </CartContextProvider>
  )
}

export default App
