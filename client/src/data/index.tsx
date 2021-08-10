import { wordsClass5 } from './words'
import { wordsClass4 } from './words-class4'
import { getMappedWords } from '../utils'

export * from './words'

export const wordsMapper = {
  class4: getMappedWords(wordsClass4),
  class5: getMappedWords(wordsClass5),
}

