import React, { useState } from 'react'

import { WordCard } from '../WordCard'
import { NextBtn } from '../NextBtn'
import { getWord } from '../../utils/getWord'
import { words } from '../../data/words'
import { getCaption } from '../../utils/getCaption'

import './App.css'

export const App = () => {
  const [word, setWord] = useState(getWord())
  const length = words.length
  return (
    <div className='container'>
      <h1 className='text-center'>Иврит</h1>
      <p className='text-center'>{`${length} ${getCaption(length)}`}</p>
      <WordCard currentWord={word} />
      <NextBtn onClick={() => setWord(getWord())} />
    </div>
  )
}
