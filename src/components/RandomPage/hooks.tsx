import { useState } from 'react'

import random from 'lodash/random'

import { getNewArrayWithout, getWord } from '../../utils'
import { words } from '../../data/words'

export const length = words.length

const initialIdx = random(0, length - 1)

const initialState = {
  currentWords: getNewArrayWithout(words, initialIdx),
  currentWord: getWord(words, initialIdx),
}

export const useWords = () => {
  const [state, setState] = useState(initialState)
  const { currentWord, currentWords } = state

  const clickHandler = () => {
    setState(() => {
      if(currentWords.length < 1){
        const newIdx = random(0, length - 1)
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
