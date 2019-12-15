import React from 'react'

type TProps = {
  value: string,
  className?: string,
}

export const ListItem = ({ value, className }: TProps) => (
  <li 
    className={`list-group-item text-center font-weight-bolder ${className}`}
  >
    {value}
  </li>
)
