import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Arrow } from '../Arrow'
import { WordCard } from '../WordCard'
import { Btn } from '../Btn'
import { nextBtnCaption, nextBtnClassName } from '../../config'
import { useWords } from './hooks'
import { getRoute } from '../../utils'

export const RandomPage = () => {
 const { nextBtnClickHandler, currentWord } = useWords()
  return (
    <>
      <Link to={getRoute('search/')}>
        <Arrow className="right" />
      </Link>
      <WordCard currentWord={currentWord} />
      <div className='next-btn-wrapper d-flex justify-content-center'>
        <Btn
          onClick={nextBtnClickHandler} 
          className={nextBtnClassName}
          value={nextBtnCaption}
        />
      </div>
    </>
  )
}
