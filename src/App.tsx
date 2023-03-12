import { eCommerceItems } from './mockups/eCommerceItems'

function App (): JSX.Element {
  return (
    <div className="bg-slate-800 w-full h-full">
      <div className='flex flex-col items-center w-screen'>
        {eCommerceItems.map((item) => {
          return (
            <div key={item.id} className="w-72">
              <p>{item.title}</p>
              <img
                src={item.image}
                alt={item.title}
                loading='lazy'
                className='bg-red-600'/>
              <p>{item.price}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
