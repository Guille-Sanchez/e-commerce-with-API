import { createContext, useState } from 'react'

export interface sortByInterface {
  sortBy: {
    category: string
    minPrice: number
  }
  setSortBy: React.Dispatch<React.SetStateAction<{
    category: string
    minPrice: number
  }>>
}

export const SortByContext = createContext<sortByInterface>({
  sortBy: {
    category: 'All',
    minPrice: 0
  },
  setSortBy: (_value: React.SetStateAction<{
    category: string
    minPrice: number
  }>) => {}
})

interface Props {
  children: React.ReactNode
}

export const SortContextProvider = ({ children }: Props): JSX.Element => {
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
