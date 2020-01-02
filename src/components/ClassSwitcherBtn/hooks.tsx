import { BaseSyntheticEvent } from 'react'
import { useHistory } from 'react-router-dom'

import { useAppContext } from '../../reducer'
import { wordsToggle } from '../../actions'

export const useClassSwitch = () => {
  const { dispatch } = useAppContext()
  const history = useHistory()
  const classSwitcherChangeHandler = (evt: BaseSyntheticEvent) => {
    const { value } = evt.target
    wordsToggle(value, dispatch)
    history.push('/')
    localStorage.setItem('learn-hebrew-words', value)
  }
  return classSwitcherChangeHandler
}
