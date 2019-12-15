import React from 'react'

type TProps = {
  className: string,
  onClick: () => void,
  value: string,
}

export const Btn = ({ 
  className, 
  onClick, 
  value,
}: TProps) => (
  <button 
    className={className}
    type='button'
    onClick={onClick}
  >
    {value}
  </button>
)
