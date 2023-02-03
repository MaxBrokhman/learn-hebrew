import { BaseSyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppContext } from '../../reducer'
import { wordsToggle } from '../../actions'
import { getRoute } from '../../utils'

export const useClassSwitch = () => {
  const { dispatch } = useAppContext()
  const navigate = useNavigate()
  const classSwitcherChangeHandler = (evt: BaseSyntheticEvent) => {
    const { value } = evt.target
    wordsToggle(value, dispatch)
    navigate(getRoute())
    localStorage.setItem('learn-hebrew-words', value)
  }
  return classSwitcherChangeHandler
}
