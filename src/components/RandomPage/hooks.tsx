import { getWordsWithRandom } from '../../utils'
import { useAppContext } from '../../reducer' 

export const useWords = () => {
  const { 
    state: {
      currentWords,
      words,
    },
    dispatch,
  } = useAppContext()

  const nextBtnClickHandler = () => {
    if (!currentWords.length) {
      dispatch({
        type: 'CURRENT_WORDS_UPDATE',
        payload: getWordsWithRandom(words)
      })
    } else {
      dispatch({
        type: 'CURRENT_WORDS_UPDATE',
        payload: getWordsWithRandom(currentWords)
      })
    }
  }

  return {
    nextBtnClickHandler,
    words,
  }
}
