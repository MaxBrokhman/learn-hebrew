import { getWordsWithRandom } from '../../utils'
import { useAppContext } from '../../reducer'
import { currentWordsUpdate } from '../../actions' 

export const useWords = () => {
  const { 
    state: {
      currentWord,
      currentWords,
      words,
    },
    dispatch,
  } = useAppContext()

  const nextBtnClickHandler = () => {

    const currentValues = currentWords.length 
      ? getWordsWithRandom(currentWords)
      : getWordsWithRandom(words)
      
    currentWordsUpdate(currentValues, dispatch)
  }

  return {
    nextBtnClickHandler,
    currentWord,
  }
}
