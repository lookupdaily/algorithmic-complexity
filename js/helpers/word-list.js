
const fs = require('fs');

// Returns the path to the word list which is separated by `\n`
const wordListPath = require('word-list');

const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
//=> […, 'abmhos', 'abnegate', …]
