import { createContext, useState } from 'react'
import { type SortContextProviderProps, type sortByInterfaceContext } from '../types.d'

export const SortByContext = createContext<sortByInterfaceContext>({
  sortBy: {
    category: 'All',
    minPrice: 0
  },
  setSortBy: (prev) => { return ({ ...prev }) }
})

export const SortContextProvider = ({ children }: SortContextProviderProps): JSX.Element => {
  const [sortBy, setSortBy] = useState({
    category: 'All',
    minPrice: 0
  })

  return (
    <SortByContext.Provider value={{ sortBy, setSortBy }}>
      {children}
    </SortByContext.Provider>
  )
}
