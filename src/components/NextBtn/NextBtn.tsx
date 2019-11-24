import React from 'react'

type TProps = {
  onClick: () => void,
}

export const NextBtn = ({ onClick }: TProps) => (
  <div className='next-btn-wrapper d-flex justify-content-center'>
    <button 
      className='btn btn-primary' 
      type='button'
      onClick={onClick}
    >
      Дальше
    </button>
  </div>
  
)
