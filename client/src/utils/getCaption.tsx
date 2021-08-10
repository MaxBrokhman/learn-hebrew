export const getCaption = (value: number) => {
  const restOfDivide = value % 10
  if (restOfDivide === 1){
    return 'слово'
  } if (restOfDivide > 1 && restOfDivide < 5) {
    return 'слова'
  } 
    return 'слов'
  
}
