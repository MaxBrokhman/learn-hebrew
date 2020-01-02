import { useHistory, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import { getWordsWithRandom, getRoute } from '../../utils'
import { useAppContext } from '../../reducer'
import { currentWordsUpdate } from '../../actions' 

export const useWords = () => {
  const { 
    state: {
      classWords,
      currentWord,
      currentWords,
      words,
    },
    dispatch,
  } = useAppContext()
  const { id } = currentWord
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    const currentWordPathname = getRoute(`${classWords}/${id}/`)
    if (location.pathname !== currentWordPathname)
    history.push(currentWordPathname)
  }, [classWords])

  const nextBtnClickHandler = () => {

    const currentValues = currentWords.length 
      ? getWordsWithRandom(currentWords)
      : getWordsWithRandom(words)
      
    currentWordsUpdate(currentValues, dispatch)
    history.push(getRoute(`${classWords}/${currentValues.currentWord.id}/`))
  }

  return {
    nextBtnClickHandler,
    words,
  }
}
