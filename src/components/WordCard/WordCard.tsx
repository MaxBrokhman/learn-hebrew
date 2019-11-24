import React, { useState, useEffect } from 'react'

import { TWord } from '../../data/words'
import { ListItem } from '../ListItem'
import { ListItemWithBtn } from '../ListItemWithBtn'
import { showTranslationBtn, showPronouncingBtn } from '../../config'

type TProps = {
  currentWord: TWord,
}

export const WordCard = ({ currentWord }: TProps) => {
  const [isPronouncingShowed, setPronouncingShowed] = useState(false)
  const [isTranslationShowed, setTranslationShowed] = useState(false)
  useEffect(() => {
    setPronouncingShowed(false)
    setTranslationShowed(false)
  }, [currentWord])

  const {
    word,
    pronouncing,
    translation,
  } = currentWord

  return (
    <div className='card'>
      <ul className='list-group list-group-flush'>
        <ListItem value={word} />
        <ListItemWithBtn
          value={pronouncing} 
          isOpen={isPronouncingShowed}
          onClick={() => setPronouncingShowed(true)}
          btnValue={showPronouncingBtn}
        />
        <ListItemWithBtn 
          value={translation} 
          isOpen={isTranslationShowed} 
          onClick={() => setTranslationShowed(true)}
          btnValue={showTranslationBtn}
        />
      </ul>
    </div>
  )
}
