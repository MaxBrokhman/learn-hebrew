import { useState, useEffect, useCallback } from 'react'

import get from 'lodash/get'

import { wordsMapper } from '../../data'

export const useClassWords = () => {
  const [currentWords, setWords] = useState(get(wordsMapper, 'class5'))
  useEffect(() => {
    const choosedWords = localStorage.getItem('learn-hebrew-words')
    if(choosedWords) setWords(get(wordsMapper, choosedWords))
  }, [])

  const onClassSelect = useCallback((value: string) => {
    localStorage.setItem('learn-hebrew-words', value)
    setWords(get(wordsMapper, value))
  }, [])

  return {
    currentWords,
    onClassSelect,
  }
}
