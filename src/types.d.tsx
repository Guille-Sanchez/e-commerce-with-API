export interface eCommerceItemInterface {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export type eCommerceItemsType = eCommerceItemInterface[]

export type setSortByType = React.Dispatch<React.SetStateAction<{
  category: string
  minPrice: number
}>>

export interface sortByInterface {
  category: string
  minPrice: number
}
