import { TWordUnmapped } from "../data";

import map from 'lodash/map'

export const getMappedWords = (words: Array<TWordUnmapped>) => map(
  words, 
  (word, idx) => ({...word, id: idx}),
)
