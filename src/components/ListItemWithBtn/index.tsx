import React from 'react'

import { ListItem } from '../ListItem'
import { Btn } from '../Btn'
import { wordCardBtnClassName } from '../../config'

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
    : <Btn 
        className={wordCardBtnClassName}
        onClick={onClick}
        value={btnValue}
      />
)
