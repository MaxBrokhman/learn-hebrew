import React, { forwardRef } from 'react'

import { useSearchInput } from './hooks'

export const SearchInput = forwardRef<HTMLInputElement>((props, ref) => {
  const { searchTerm, searchInputHandler } = useSearchInput()
  return (
  <input 
    type="text" 
    className="form-control" 
    aria-label="Sizing example input" 
    aria-describedby="inputGroup-sizing-default" 
    value={searchTerm}
    ref={ref}
    onChange={searchInputHandler} />
)})
