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

export interface sortByInterface {
  category: string
  minPrice: number
}

export type setSortByType = React.Dispatch<React.SetStateAction<sortByInterface>>

export interface sortByInterfaceContext {
  sortBy: sortByInterface
  setSortBy: setSortByType
}

export interface eCommerceProductsState {
  eCommerceProducts: eCommerceItemsType | null
  setEcommerceProducts: React.Dispatch<React.SetStateAction<eCommerceItemsType | null>>
}

export interface sortProductsProps {
  sortBy: sortByInterface
  setEcommerceProducts: React.Dispatch<React.SetStateAction<eCommerceItemsType | null>>
  originalProducts: eCommerceItemsType | null
}

export interface SortContextProviderProps {
  children: React.ReactNode
}
