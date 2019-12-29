import React, { BaseSyntheticEvent } from 'react'

import './ClassSwitcherBtn.css'

type TProps = {
  onChange: (evt: BaseSyntheticEvent) => void,
}

export const ClassSwitcherBtn = ({ onChange }: TProps) => (
  <select 
    className="input-group-text class-switcher" 
    onChange={onChange}
  >
    <option value='class4'>כיתה 4</option>
    <option value='class5'>כיתה 5</option>
  </select>
)
