const fs = require('fs');

// Returns the path to the word list which is separated by `\n`
const wordListPath = require('word-list');

module.exports = class RandomArray {
  constructor(requiredLength, dataType = 'integer') {
    this.dataType = dataType.toLowerCase()
    this.requiredLength = requiredLength
    this.inputArray = this.generateArray()
  }
  
  get array() {
    return this.inputArray
  }

  generateArray() {
    let method = this.selectMethod()
    let array = []
    for(let i = 0; i < this.requiredLength; i++) {
      array.push(method())
    }
    return array
  }

  selectMethod() {
    if (this.dataType == 'integer') {
      return this.intArray
    } 
    if (this.dataType == 'string') {
      return this.stringArray
    }
  }

  intArray() {
    return Math.floor(Math.random() * 100)
  }

  stringArray() {
    const possibleWords = fs.readFileSync(wordListPath, 'utf8').split('\n')
    return possibleWords[Math.floor(Math.random() * possibleWords.length)]
  }
}

