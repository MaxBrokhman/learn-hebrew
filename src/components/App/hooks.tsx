import { useEffect, useReducer } from 'react'

import get from 'lodash/get'

import { wordsMapper } from '../../data'
import { TReducer, TState } from '../../reducer'
import { defaultClass } from '../../config'

export const useAppWords = (reducer: TReducer, initialState: TState) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const choosedWords = localStorage.getItem('learn-hebrew-words')
    if(choosedWords && choosedWords !== defaultClass) {
      dispatch({
        type: 'WORDS_TOGGLE',
        payload: {
          words: get(wordsMapper, choosedWords, []),
          classWords: choosedWords,
        },
      })
    }
  }, [])

  return {
    dispatch,
    state,
  }
}
