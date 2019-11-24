import React, { useState } from 'react'

import { WordCard } from '../WordCard'
import { NextBtn } from '../NextBtn'
import { getWord } from '../../utils/getWord'
import { words } from '../../data/words'

import './App.css'

export const App = () => {
  const [word, setWord] = useState(getWord())
  return (
    <div className='container'>
      <h1 className='text-center'>Иврит</h1>
      <p className='text-center'>{`${words.length} слова`}</p>
      <WordCard currentWord={word} />
      <NextBtn onClick={() => setWord(getWord())} />
    </div>
  )
}
