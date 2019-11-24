import random from 'lodash/random'

import { words } from '../data/words'

export const getWord = () => words[random(0, words.length - 1)]
