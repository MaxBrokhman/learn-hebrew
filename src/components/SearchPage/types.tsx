import { TWord } from '../../data/words'

type TState = {
  words: Array<TWord>,
  searchTerm: string,
  searchType: string,
}

export type TSetState = (func: (state: TState) => TState) => void
