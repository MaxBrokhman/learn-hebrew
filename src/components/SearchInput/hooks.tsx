import { BaseSyntheticEvent, useContext } from 'react'

import { Context } from '../../reducer'

export const useSearchInput = () => {
  const { state, dispatch } = useContext(Context)
  const { searchTerm } = state

  const searchInputHandler = (evt: BaseSyntheticEvent) => {
    const { value } = evt.target
    dispatch({
      type: 'SEARCH_INPUT',
      payload: value,
    })
  }

  return {
    searchTerm,
    searchInputHandler,
  }
}
