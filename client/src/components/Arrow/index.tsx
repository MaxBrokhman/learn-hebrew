import React from 'react'

import './Arrow.css'

type TProps = {
  className: string,
}

// className should be either 'left' or 'right'
export const Arrow = ({ className }: TProps) => (
  <div className={`arrow arrow_${className}`} />
)
