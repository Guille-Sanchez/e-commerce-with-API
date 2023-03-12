import { eCommerceItems } from './mockups/eCommerceItems'

function App (): JSX.Element {
  return (
    <div className='bg-indigo-900 w-full h-full font'>
      <h1 className='bg-white pt-5 pb-5 text-3xl font-extrabold'>E-commerce</h1>
      <div className='grid justify-center'>
        <div className='grid sm:grid-cols-2 min-[950px]:grid-cols-3 justify-center w-screen max-w-[1100px] gap-y-5 mt-5 mb-5'>
          {eCommerceItems.map((item) => {
            return (
              <div key={item.id} className='justify-self-center'>
                <div className='grid grid-rows-[auto 1fr auto] w-72 h-full justify-center bg-white rounded-lg'>
                  <p className='p-3 font-semibold text-lg'>{item.title}</p>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading='lazy'
                    className='w-64 p-2 h-64 object-contain place-self-center'/>
                  <p className='text-center font-semibold self-end'>{`$${item.price}`}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
