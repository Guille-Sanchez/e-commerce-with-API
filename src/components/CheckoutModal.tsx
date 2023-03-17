interface Props {
  setConfirmedCheckout: React.Dispatch<React.SetStateAction<boolean>>
}
export const CheckoutModal = ({ setConfirmedCheckout }: Props): JSX.Element => {
  return (
    <div className='absolute inset-0 bg-black bg-opacity-30 z-10'>
    <div className='h-screen grid place-items-center'>
      <div className='relative w-[335px] h-80 p-5 bg-white grid gap-y-5 rounded-lg place-items-center'>
        <p className='font-bold text-center text-3xl leading-10'>Thank you for buying in Ecommerce!</p>
        <button
          onClick={() => {
            setConfirmedCheckout(() => false)
          }}
          className='bg-indigo-900 font-bold text-slate-200 rounded-lg w-56 h-min pt-2 pb-2 hover:brightness-150'
        >
          View products again
        </button>
      </div>
    </div>
  </div>
  )
}
