import React, { 
  Fragment, 
  BaseSyntheticEvent,
  useCallback,
  useRef,
} from 'react'

import { SearchInput } from '../SearchInput'
import { SelectSearchType } from '../SelectSearchType'
import { SearchResultsList } from '../SearchResultsList'
import { useSearch } from './hooks'
import { TWord } from '../../data/words'

type TProps = {
  words: Array<TWord>,
}

export const SearchPage = ({ words }: TProps) => {
  const {
    setState,
    wordsToShow,
    search,
  } = useSearch(words)
  const inputEl = useRef<HTMLInputElement>(null)

  const onSelect = useCallback((evt: BaseSyntheticEvent) => {
    const { value } = evt.target
    inputEl.current && inputEl.current.focus()
    setState((state) => {
    return {
      ...state,
      searchType: value,
    }})
  }, [inputEl, setState])

  return (
    <Fragment>
      <div className="input-group mb-3">
        <SelectSearchType onChange={onSelect} />
        <SearchInput search={search} setState={setState} ref={inputEl} />
      </div>
      <SearchResultsList wordsToShow={wordsToShow} />
    </Fragment>
  )
}
