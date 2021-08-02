import React, { BaseSyntheticEvent } from 'react'

import './SearchTypeSelect.css'

type TProps = {
  onChange: (evt: BaseSyntheticEvent) => void,
}

export const SelectSearchType = ({ onChange } :TProps) => (
  <div className="input-group-prepend">
    <select 
      className="input-group-text search-type-select" 
      id="inputGroup-sizing-default"
      onChange={onChange}>
      <option value='translation'>Поиск по переводу</option>
      <option value='word'>Поиск по слову</option>
      <option value='pronouncing'>Поиск по произношению</option> 
    </select>
  </div>
)
