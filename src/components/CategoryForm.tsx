import { useId } from 'react'
import { type setSortByType } from '../types.d'

interface Props {
  setSortBy: setSortByType
}
export const CategoryForm = ({ setSortBy }: Props): JSX.Element => {
  const categories = [
    'All',
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing"
  ] as const
  const categoriesId = useId()

  return (
    <div className='flex w-full justify-end pr-5'>
      <form className='flex gap-4 items-center justify-center'>
        <label htmlFor="sort-by-category"
          className='text-slate-200 self-end font-bold p-0 m-0'
        >
          Select a category:
        </label>

        <select
          name="Category"
          id='sort-by-category'
          className='mt-4 pl-2 rounded-md'
          onChange={(e) => {
            setSortBy((prev) => {
              return (
                { ...prev, category: e.target.value }
              )
            })
          }}
        >
          {categories.map((category, index) => {
            return (<option key={`${categoriesId}-${index}`} value={category}>{category}</option>)
          })}
        </select>
      </form>
    </div>
  )
}
