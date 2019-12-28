import { useState } from 'react'

import random from 'lodash/random'

import { getNewArrayWithout, getWord } from '../../utils'
import { TWord } from '../../data/words'

export const useWords = (words: Array<TWord>) => {
  const { length } = words
  const initialIdx = random(0, length - 1)
  const [state, setState] = useState({
    currentWords: getNewArrayWithout(words, initialIdx),
    currentWord: getWord(words, initialIdx),
  })
  const { currentWord, currentWords } = state

  const clickHandler = () => {
    setState(() => {
      if(currentWords.length < 1){
        const newIdx = random(0, words.length - 1)
        return {
          currentWords: getNewArrayWithout(words, newIdx),
          currentWord: getWord(words, newIdx),
        }
      }
      const currentIdx = random(0, currentWords.length - 1)
      return {
        currentWords: getNewArrayWithout(currentWords, currentIdx),
        currentWord: getWord(currentWords, currentIdx),
    }})
  }

  return {
    currentWord,
    clickHandler,
  }
}
