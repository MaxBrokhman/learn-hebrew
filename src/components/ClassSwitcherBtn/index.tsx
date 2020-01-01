import React from 'react'

import { useClassSwitch } from './hooks'

import './ClassSwitcherBtn.css'

type TProps = {
  defaultValue?: string,
}

export const ClassSwitcherBtn = ({ defaultValue }: TProps) => (
  <select 
    className="input-group-text class-switcher" 
    onChange={useClassSwitch()}
    value={defaultValue}
  >
    <option value='class4'>כיתה 4</option>
    <option value='class5'>כיתה 5</option>
  </select>
)
