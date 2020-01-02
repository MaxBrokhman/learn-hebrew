import { Dispatch } from 'react'

import get from 'lodash/get'

import { TAction } from '../reducer'
import { TWord, wordsMapper } from '../data'

type TCurrentValues = {
  currentWords: Array<TWord>,
  currentWord: TWord,
}

export const currentWordsUpdate = (
  currentValues: TCurrentValues, 
  dispatch: Dispatch<TAction>,
) => {
  dispatch({
    type: 'CURRENT_WORDS_UPDATE',
    payload: currentValues,
  })
}

export const wordsToggle = (
  value: string,
  dispatch: Dispatch<TAction>,
) => {
  dispatch({
    type: 'WORDS_TOGGLE',
    payload: {
      words: get(wordsMapper, value, []),
      classWords: value,
    },
  })
}

export const searchInput = (
  value: string,
  dispatch: Dispatch<TAction>,
) => {
  dispatch({
    type: 'SEARCH_INPUT',
    payload: value,
  })
}

export const searchTypeToggle = (
  value: string,
  dispatch: Dispatch<TAction>,
) => {
  dispatch({
    type: 'SEARCH_TYPE_TOGGLE',
    payload: value,
  })
}
