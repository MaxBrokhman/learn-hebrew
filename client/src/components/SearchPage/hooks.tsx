import { BaseSyntheticEvent, useRef } from 'react'

import { useAppContext } from '../../reducer' 
import { searchTypeToggle } from '../../actions'

export const useSearch = () => {
  const { state, dispatch } = useAppContext()
  const inputEl = useRef<HTMLInputElement>(null)
  const searchTypeSelectHandler = (evt: BaseSyntheticEvent) => {
    const { value } = evt.target
    inputEl.current && inputEl.current.focus()
    searchTypeToggle(value, dispatch)
  }

  return {
    inputEl,
    searchTypeSelectHandler,
    wordsToShow: state.wordsToShow,
  }
}
