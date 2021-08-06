export const getCaption = (value: number) => {
  const restOfDivide = value % 10
  if (restOfDivide === 1){
    return 'слово'
  } else if (restOfDivide > 1 && restOfDivide < 5) {
    return 'слова'
  } else {
    return 'слов'
  }
}
