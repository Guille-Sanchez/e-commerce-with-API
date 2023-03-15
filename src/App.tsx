import { useState } from 'react'
import { Cart } from './components/Cart'
import { CategoryForm } from './components/CategoryForm'
import { EcommerItems } from './components/EcommerItems'
import { MinPriceForm } from './components/MinPriceForm'
import { Navbar } from './components/Navbar'
import { CartContextProvider } from './context/CartContext'
import { SortContextProvider } from './context/SortContext'

function App (): JSX.Element {
  const [showCart, setShowCart] = useState(false)
  return (
    <CartContextProvider>
      <Navbar setShowCart={setShowCart} showCart={showCart}/>
      {showCart && <Cart setShowCart={setShowCart}/>}

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
