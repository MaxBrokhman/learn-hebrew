import { useState } from 'react'

import filter from 'lodash/filter'
import slice from 'lodash/slice'
import get from 'lodash/get'

import { words } from '../../data/words'
import { isSearched } from '../../utils'

export const useSearch = () => {
  const [state, setState] = useState({
    words,
    searchTerm: '',
    searchType: 'translation',
  })

  const searchedWords = filter(words, (word) => {
    const normalizedInput = state.searchTerm.toLowerCase().trim()
    const searchedWord = get(word, state.searchType)
    return isSearched(searchedWord, normalizedInput)
  }) 

  return {
    setState,
    wordsToShow: slice(searchedWords, 0, 10),
    search: state.searchTerm,
  }
}
