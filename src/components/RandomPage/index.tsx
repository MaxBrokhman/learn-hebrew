import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'

import { Arrow } from '../Arrow'
import { WordCard } from '../WordCard'
import { withWordCardUrl } from '../../hocs'
import { Btn } from '../Btn'
import { nextBtnCaption, nextBtnClassName } from '../../config'
import { useWords } from './hooks'

export const RandomPage = () => {
 const { nextBtnClickHandler } = useWords()
  return (
    <Fragment>
      <Link to='/search'>
        <Arrow className={'right'} />
      </Link>
      <Route 
        path={`/:classWords/:id/`} 
        component={withWordCardUrl(WordCard)} 
      />
      <div className='next-btn-wrapper d-flex justify-content-center'>
        <Btn
          onClick={nextBtnClickHandler} 
          className={nextBtnClassName}
          value={nextBtnCaption}
        />
      </div>
    </Fragment>
  )
}
