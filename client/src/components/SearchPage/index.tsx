import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Arrow } from '../Arrow'
import { SearchInput } from '../SearchInput'
import { SelectSearchType } from '../SelectSearchType'
import { SearchResultsList } from '../SearchResultsList'
import { useSearch } from './hooks'
import { getRoute } from '../../utils'

export const SearchPage = () => {
  const {
    inputEl,
    searchTypeSelectHandler,
    wordsToShow,
  } = useSearch()

  return (
    <>
      <Link to={getRoute()}>
        <Arrow className="left" />
      </Link>
      <div className="input-group mb-3">
        <SelectSearchType onChange={searchTypeSelectHandler} />
        <SearchInput ref={inputEl} />
      </div>
      <SearchResultsList wordsToShow={wordsToShow} />
    </>
  )
}
