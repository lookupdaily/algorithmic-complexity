
const fs = require('fs');

// Returns the path to the word list which is separated by `\n`
const wordListPath = require('word-list');

const wordList = fs.readFileSync(wordListPath, 'utf8').split('\n');

module.exports = function wordArray(maxWordLength = 4) {
  return wordList.filter(word => word.length <= maxWordLength)
}


//=> […, 'abmhos', 'abnegate', …]
