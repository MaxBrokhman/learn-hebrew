/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const file = fs.readFileSync('./client/words.txt', 'utf-8');

const isLatinWord = word => /^[a-z]+$/.test(word);

const processWords = (fileString) => {
  const normalizedWords = fileString
  .split('\n')
  .map((str) => str.trim().toLowerCase());

  const objects = normalizedWords.map(line => {
    const lineArr = line.split(' ').map(str => str.trim());
    const translationObject = lineArr.reduce((acc, word) => {
      if (isLatinWord(word)) {
        acc.word.push(word);
      } else {
        acc.translation.push(word);
      }
      return acc;
    }, { word: [], translation: [] });

    return {
      word: translationObject.word.join(' '),
      translation: translationObject.translation.join(' '),
    };
  });

  fs.writeFileSync('./client/src/data/en.ts', `export const en = ${JSON.stringify(objects)}`);
}

processWords(file);
