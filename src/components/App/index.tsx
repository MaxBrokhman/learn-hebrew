import React from 'react'

import { WordCard } from '../WordCard'
import { Btn } from '../Btn'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { nextBtnCaption, nextBtnClassName } from '../../config'
import { Header } from '../Header'
import { useWords, length } from './hooks'

import './App.css'

export const App = () => {
  const {
    currentWord,
    clickHandler,
  } = useWords()

  return (
    <div className='container'>
      <ThemeSwitcher />
      <Header length={length} />
      <WordCard currentWord={currentWord} />
      <div className='next-btn-wrapper d-flex justify-content-center'>
        <Btn
          onClick={clickHandler} 
          className={nextBtnClassName}
          value={nextBtnCaption}
        />
      </div>
    </div>
  )
}
