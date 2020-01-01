import { BaseSyntheticEvent } from 'react'
import { useHistory } from 'react-router-dom'

import get from 'lodash/get'

import { useAppContext } from '../../reducer'
import { wordsMapper } from '../../data'

export const useClassSwitch = () => {
  const { dispatch } = useAppContext()
  const history = useHistory()
  const classSwitcherChangeHandler = (evt: BaseSyntheticEvent) => {
    const { value } = evt.target
    dispatch({
      type: 'WORDS_TOGGLE',
      payload: {
        words: get(wordsMapper, value, []),
        classWords: value,
      },
    })
    history.push('/')
    localStorage.setItem('learn-hebrew-words', value)
  }
  return classSwitcherChangeHandler
}
