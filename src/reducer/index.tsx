import { 
  createContext, 
  Dispatch, 
  useContext,
} from 'react'

import get from 'lodash/get'

import { TWord, wordsMapper } from "../data"
import { getWordsWithRandom, getSearchedWords } from '../utils'

export type TState = {
  words: Array<TWord>,
  currentWords: Array<TWord>,
  currentWord: TWord,
  classWords: string,
  searchTerm: string,
  searchType: string,
  wordsToShow: Array<TWord>,
}

export type TAction = {
  type: string,
  payload: any,
}

type TInitialContext = {
  state: TState,
  dispatch: Dispatch<TAction>,
}

export type TReducer = (state: TState, action: TAction) => TState

const initialWords = get(wordsMapper, 'class4', [])

export const initialState: TState = {
  searchTerm: '',
  searchType: 'translation',
  classWords: 'class4',
  wordsToShow: [],
  words: initialWords,
  ...getWordsWithRandom(initialWords),
}

const initialContext: TInitialContext = {
  state: initialState,
  dispatch: () => {},
}

export const Context = createContext(initialContext)

export const useAppContext = () => useContext(Context)

export const reducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case 'WORDS_TOGGLE': {
      const { words, classWords } = action.payload
      return {
        ...state,
        words,
        classWords,
        ...getWordsWithRandom(words),
      }
    }
    case 'CURRENT_WORDS_UPDATE': {
      const { currentWord, currentWords } = action.payload 
      return {
        ...state,
        currentWords,
        currentWord,
      }
    }
    case 'SEARCH_INPUT': {
      const {
        searchType,
        words,
      } = state
      const term = action.payload
      return {
        ...state,
        searchTerm: term,
        wordsToShow: getSearchedWords(words, term, searchType),
      }
    }
    case 'SEARCH_TYPE_TOGGLE': {
      const {
        searchTerm,
        words,
      } = state
      return {
        ...state,
        searchType: action.payload,
        wordsToShow: getSearchedWords(words, searchTerm, action.payload),
      }
    }
    default: {
      return state
    }
  }
}
