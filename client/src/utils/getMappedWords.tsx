import map from 'lodash/map'
import { TWordUnmapped } from "../data";


export const getMappedWords = (words: Array<TWordUnmapped>) => map(
  words, 
  (word, idx) => ({...word, id: idx}),
)
