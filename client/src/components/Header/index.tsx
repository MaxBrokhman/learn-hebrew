import React, { Fragment } from 'react'

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
  const {length} = words
  const passedLength = length - currentWords.length
  return (
  <>
    <ThemeSwitcher />
    <ClassSwitcherBtn defaultValue={classWords} />
    <h1 className='text-center'>{classWords === 'en'? 'English' : 'Иврит'}</h1>
    <p className='text-center'>
      {`${passedLength} ${getCaption(passedLength)} из ${length}`}
    </p>
  </>
)}
