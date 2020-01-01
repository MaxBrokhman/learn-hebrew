import { BaseSyntheticEvent, useRef } from 'react'

import { useAppContext } from '../../reducer' 

export const useSearch = () => {
  const { state, dispatch } = useAppContext()
  const inputEl = useRef<HTMLInputElement>(null)
  const searchTypeSelectHandler = (evt: BaseSyntheticEvent) => {
    const { value } = evt.target
    inputEl.current && inputEl.current.focus()
    dispatch({
      type: 'SEARCH_TYPE_TOGGLE',
      payload: value,
    })
  }
  const { wordsToShow } = state

  return {
    inputEl,
    searchTypeSelectHandler,
    wordsToShow,
  }
}
