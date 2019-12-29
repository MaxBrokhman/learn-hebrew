import filter from 'lodash/filter'
import slice from 'lodash/slice'
import get from 'lodash/get'

import { TWord } from '../data/words'
import { 
  isSearched,
  normalizeString,
} from './'

export const getSearchedWords = (words: Array<TWord>, term: string, type: string) => slice(
  filter(words, (word) => {
    const normalizedInput = normalizeString(term)
    const searchedWord = get(word, type)
    return isSearched(searchedWord, normalizedInput)
  }),
  0,
  10,
)
