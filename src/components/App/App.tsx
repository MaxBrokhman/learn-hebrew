import React, { useState } from 'react'

import { WordCard } from '../WordCard'
import { Btn } from '../Btn'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { getWord } from '../../utils/getWord'
import { getCaption } from '../../utils/getCaption'
import { nextBtnCaption, nextBtnClassName } from '../../config'

import './App.css'

type TProps = {
  length: number,
}

export const App = ({ length }: TProps) => {
  const [word, setWord] = useState(getWord())
  return (
    <div className='container'>
      <ThemeSwitcher />
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
