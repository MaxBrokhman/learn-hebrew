import { useState } from 'react'

import { TWord } from '../../data/words'
import { getSearchedWords } from '../../utils'

export const useSearch = (words: Array<TWord>) => {
  const [state, setState] = useState({
    words,
    searchTerm: '',
    searchType: 'translation',
  })

  if (state.searchTerm.length) {
    return {
      setState,
      wordsToShow: getSearchedWords(words, state.searchTerm, state.searchType),
      search: state.searchTerm,
    }
  }
  return {
    setState,
    search: state.searchTerm,
  }
}
