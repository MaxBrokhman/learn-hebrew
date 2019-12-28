import React, { 
  BaseSyntheticEvent, 
  RefObject,
  forwardRef,
} from 'react'

import { TSetState } from '../SearchPage/types'

type TProps = {
  search: string,
  setState: TSetState,
  ref?: RefObject<any>,
}

export const SearchInput = forwardRef<HTMLInputElement, TProps>(({ 
  search, 
  setState, 
}: TProps, ref) => (
  <input 
    type="text" 
    className="form-control" 
    aria-label="Sizing example input" 
    aria-describedby="inputGroup-sizing-default" 
    value={search}
    ref={ref}
    onChange={(evt: BaseSyntheticEvent) => {
      const { value } = evt.target
      setState((state) => {
      return {
        ...state,
        searchTerm: value,
      }
    })
  }} />
))
