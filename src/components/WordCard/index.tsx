import React from 'react'

import { ListItem } from '../ListItem'
import { ListItemWithBtn } from '../ListItemWithBtn'
import { 
  showTranslationBtn, 
  showPronouncingBtn, 
  firstListItemClassName,
} from '../../config'
import { useWordCardButtons } from './hooks'
import { TWord } from '../../data'

export type TProps = {
  currentWord: TWord,
}

export const WordCard = ({ currentWord }: TProps) => {
  const {
    word,
    pronouncing,
    translation,
    sex,
  } = currentWord
  
  const {
    isPronouncingShowed,
    isTranslationShowed,
    setPronouncingShowed,
    setTranslationShowed,
  } = useWordCardButtons(currentWord)

  return (
    <div className='card'>
      <ul className='list-group list-group-flush'>
        <ListItem value={word} className={firstListItemClassName} />
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
        {sex && <ListItem value={sex} />}
      </ul>
    </div>
  )
}
