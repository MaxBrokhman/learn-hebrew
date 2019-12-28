import React from 'react'

import map from 'lodash/map'

import { WordCard } from '../WordCard'
import { TWord } from '../../data/words'

import './SearchResultsList.css'

type TProps = {
  wordsToShow: Array<TWord>,
}

export const SearchResultsList = ({ wordsToShow }: TProps) => (
  <ul className='search-results-list'>
    {map(wordsToShow, (word) => (
      <li key={word.word} className='search-results-list__item'>
        <WordCard currentWord={word} />
      </li>
    ))}
  </ul>
)
