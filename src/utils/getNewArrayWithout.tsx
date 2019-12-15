import slice from 'lodash/slice'

import { TWord } from '../data/words'

export const getNewArrayWithout = (array: Array<TWord>, idx: number) => [
  ...slice(array, 0, idx),
  ...slice(array, idx + 1),
]
