import { BaseSyntheticEvent, useContext } from 'react'

import { Context } from '../../reducer'
import { searchInput } from '../../actions'

export const useSearchInput = () => {
  const { state, dispatch } = useContext(Context)
  const { searchTerm } = state

  const searchInputHandler = (evt: BaseSyntheticEvent) => {
    const { value } = evt.target
    searchInput(value, dispatch)
  }

  return {
    searchTerm,
    searchInputHandler,
  }
}
