import React, { Fragment } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import get from 'lodash/get'

import { Arrow } from '../Arrow'
import { WordCard } from '../WordCard'
import { Btn } from '../Btn'
import { nextBtnCaption, nextBtnClassName } from '../../config'
import { useWords } from './hooks'

export const RandomPage = ({ match }: RouteComponentProps) => {
  const id = get(match, ['params', 'id'])
 const { 
    words, 
    nextBtnClickHandler 
  } = useWords()
  
  return (
    <Fragment>
      <Link to='/search'>
        <Arrow className={'right'} />
      </Link>
      <WordCard currentWord={words[Number(id)]} />
      <div className='next-btn-wrapper d-flex justify-content-center'>
        <Link to='/'>
          <Btn
            onClick={nextBtnClickHandler} 
            className={nextBtnClassName}
            value={nextBtnCaption}
          />
        </Link>
      </div>
    </Fragment>
  )
}
