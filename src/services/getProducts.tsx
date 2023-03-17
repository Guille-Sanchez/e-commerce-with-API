import { type eCommerceItemsType, type eCommerceItemInterface } from '../types.d'

interface Props {
  setEcommerceProducts: React.Dispatch<React.SetStateAction<eCommerceItemsType | null>>
}

export const getProducts = ({ setEcommerceProducts }: Props): void => {
  fetch('https://fakestoreapi.com/products')
    .then(async response => await response.json())
    .then((data): eCommerceItemInterface => {
      setEcommerceProducts(() => [...data])
      return data
    })
    .catch(err => { console.log(err) })
}
