import React, { useState } from 'react'

import { WordCard } from '../WordCard'
import { Btn } from '../Btn'
import { getWord } from '../../utils/getWord'
import { words } from '../../data/words'
import { getCaption } from '../../utils/getCaption'
import { nextBtnCaption, nextBtnClassName } from '../../config'

import './App.css'

const length = words.length

export const App = () => {
  const [word, setWord] = useState(getWord())

  return (
    <div className='container'>
      <h1 className='text-center'>Иврит</h1>
      <p className='text-center'>{`${length} ${getCaption(length)}`}</p>
      <WordCard currentWord={word} />
      <div className='next-btn-wrapper d-flex justify-content-center'>
        <Btn
          onClick={() => setWord(getWord())} 
          className={nextBtnClassName}
          value={nextBtnCaption}
        />
      </div>
    </div>
  )
}
