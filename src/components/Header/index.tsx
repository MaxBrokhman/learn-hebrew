import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { getCaption } from '../../utils'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { ClassSwitcherBtn } from '../ClassSwitcherBtn'
import { useAppContext } from '../../reducer'

export const Header = () => {
  const { 
    state: { 
      words, 
      classWords,
      currentWords,
    },
  } = useAppContext()
  const length = words.length
  const passedLength = length - currentWords.length
  return (
  <Fragment>
    <ThemeSwitcher />
    <ClassSwitcherBtn defaultValue={classWords} />
    <Link to='/'>
      <h1 className='text-center'>Иврит</h1>
    </Link>
    <p className='text-center'>
      {`${passedLength} ${getCaption(passedLength)} из ${length}`}
    </p>
  </Fragment>
)}
