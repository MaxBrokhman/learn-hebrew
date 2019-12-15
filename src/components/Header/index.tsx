import React, { Fragment } from 'react'

import { getCaption } from '../../utils'

type TProps = {
  length: number,
}

export const Header = ({ length }: TProps) => (
  <Fragment>
    <h1 className='text-center'>Иврит</h1>
    <p className='text-center'>{`${length} ${getCaption(length)}`}</p>
  </Fragment>
)
