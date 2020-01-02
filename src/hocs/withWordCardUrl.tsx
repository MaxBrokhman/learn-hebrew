import React, { ComponentType } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import get from 'lodash/get'

import { useAppContext } from '../reducer' 
import { TProps as TWordCardProps } from '../components/WordCard'

export const withWordCardUrl = (Component: ComponentType<TWordCardProps>) => {
  return ({ match }: TWordCardProps & RouteComponentProps) => {
    const { state } = useAppContext()
    const id = get(match, ['params', 'id'])
    const { words } = state
    const word = get(words, id)
    return (
      <Component currentWord={word} />
    )
  }
}
