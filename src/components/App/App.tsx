import React, { useState } from 'react'

import { WordCard } from '../WordCard'
import { NextBtn } from '../NextBtn'
import { getWord } from '../../utils/getWord'

import './App.css'

export const App = () => {
  const [word, setWord] = useState(getWord())
  return (
    <div className='container'>
      <h1 className='text-center'>Иврит</h1>
      <WordCard currentWord={word} />
      <NextBtn onClick={() => setWord(getWord())} />
    </div>
  )
}
