import React, { Fragment }from 'react'

import { WordCard } from '../WordCard'
import { Btn } from '../Btn'
import { nextBtnCaption, nextBtnClassName } from '../../config'
import { useWords } from './hooks'
import { TWord } from '../../data/words'

type TProps ={
  words: Array<TWord>,
}

export const RandomPage = ({ words }: TProps) => {
  const {
    currentWord,
    clickHandler,
  } = useWords(words)
  return (
    <Fragment>
      <WordCard currentWord={currentWord} />
      <div className='next-btn-wrapper d-flex justify-content-center'>
        <Btn
          onClick={clickHandler} 
          className={nextBtnClassName}
          value={nextBtnCaption}
        />
      </div>
    </Fragment>
  )
}
