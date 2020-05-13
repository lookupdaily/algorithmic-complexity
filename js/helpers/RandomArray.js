module.exports = function RandomArray(requiredLength) {
  this.inputArray = []

  for(let i = 0; i < requiredLength; i++) {
    this.inputArray.push(Math.floor(Math.random() * 100))
  }
  return this.inputArray
}