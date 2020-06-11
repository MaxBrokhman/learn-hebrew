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
    <option value='class4' selected={defaultValue === 'class4' || undefined}>כיתה 4</option>
    <option value='class5' selected={defaultValue === 'class4' || undefined}>כיתה 5</option>
  </select>
)
