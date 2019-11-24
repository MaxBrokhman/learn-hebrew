import React from 'react'

type TProps = {
  value: string,
}

export const ListItem = ({ value }: TProps) => (
  <li className='list-group-item text-center'>{value}</li>
)
