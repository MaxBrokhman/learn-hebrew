import { BaseSyntheticEvent } from 'react'
import { useHistory } from 'react-router-dom'

import { useAppContext } from '../../reducer'
import { wordsToggle } from '../../actions'
import { getRoute } from '../../utils'

export const useClassSwitch = () => {
  const { dispatch } = useAppContext()
  const history = useHistory()
  const classSwitcherChangeHandler = (evt: BaseSyntheticEvent) => {
    const { value } = evt.target
    wordsToggle(value, dispatch)
    history.push(getRoute())
    localStorage.setItem('learn-hebrew-words', value)
  }
  return classSwitcherChangeHandler
}
