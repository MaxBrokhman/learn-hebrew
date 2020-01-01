import random from 'lodash/random'

import { TWord } from '../data'
import { getNewArrayWithout, getWord } from './'

export const getWordsWithRandom = (words: Array<TWord>) => {
  const idx = random(0, words.length - 1)
  return {
    currentWords: getNewArrayWithout(words, idx),
    currentWord: getWord(words, idx),
  }
}
