import React from 'react'

import { ListItem } from '../ListItem'

type TProps = {
  value: string,
  isOpen: boolean,
  btnValue: string,
  onClick: () => void,
}

export const ListItemWithBtn = ({
  value,
  btnValue,
  isOpen,
  onClick,
}: TProps) => (
  isOpen 
    ? <ListItem value={value} />
    : <button 
        type='button' 
        className='btn btn-outline-secondary'
        onClick={onClick}
      >
        {btnValue}
      </button>
)
