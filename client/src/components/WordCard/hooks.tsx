import { useState, useLayoutEffect } from 'react'

import { TWord } from '../../data/words'

export const useWordCardButtons = (currentWord: TWord) => {
  const [isPronouncingShowed, setPronouncingShowed] = useState(false)
  const [isTranslationShowed, setTranslationShowed] = useState(false)
  useLayoutEffect(() => {
    setPronouncingShowed(false)
    setTranslationShowed(false)
  }, [currentWord])

  return {
    isPronouncingShowed,
    isTranslationShowed,
    setPronouncingShowed,
    setTranslationShowed,
  }
}
