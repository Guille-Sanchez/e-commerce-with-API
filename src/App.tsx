import { useState } from 'react'
import { Cart } from './components/Cart'
import { CategoryForm } from './components/CategoryForm'
import { CheckoutModal } from './components/CheckoutModal'
import { EcommerItems } from './components/EcommerItems'
import { MinPriceForm } from './components/MinPriceForm'
import { Navbar } from './components/Navbar'
import { CartContextProvider } from './context/CartContext'
import { SortContextProvider } from './context/SortContext'

function App (): JSX.Element {
  const [showCart, setShowCart] = useState(false)
  const [confirmedCheckout, setConfirmedCheckout] = useState(false)
  return (
    <CartContextProvider>
      <>
        {confirmedCheckout && <CheckoutModal setConfirmedCheckout={setConfirmedCheckout}/>}

        <Navbar setShowCart={setShowCart} showCart={showCart}/>

        {showCart && <Cart setConfirmedCheckout={setConfirmedCheckout} setShowCart={setShowCart}/>}

        <main className='bg-indigo-900 min-h-full min-w-full'>
          <SortContextProvider>
            <div className='pr-5 pl-5 sm:grid sm:grid-cols-2 sm:gap-5 pb-5'>
              <CategoryForm />
              <MinPriceForm />
            </div>
            <EcommerItems />
          </SortContextProvider>
        </main>
      </>
    </CartContextProvider>
  )
}

export default App
