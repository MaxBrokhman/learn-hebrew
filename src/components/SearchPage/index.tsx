import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Arrow } from '../Arrow'
import { SearchInput } from '../SearchInput'
import { SelectSearchType } from '../SelectSearchType'
import { SearchResultsList } from '../SearchResultsList'
import { useSearch } from './hooks'

export const SearchPage = () => {
  const {
    inputEl,
    searchTypeSelectHandler,
    wordsToShow,
  } = useSearch()

  return (
    <Fragment>
      <Link to='/'>
        <Arrow className={'left'} />
      </Link>
      <div className="input-group mb-3">
        <SelectSearchType onChange={searchTypeSelectHandler} />
        <SearchInput ref={inputEl} />
      </div>
      <SearchResultsList wordsToShow={wordsToShow} />
    </Fragment>
  )
}
