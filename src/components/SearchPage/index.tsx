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

export const SearchPage = () => {
  const {
    setState,
    wordsToShow,
    search,
  } = useSearch()
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
      {Boolean(search.length) && <SearchResultsList wordsToShow={wordsToShow} />}
    </Fragment>
  )
}
