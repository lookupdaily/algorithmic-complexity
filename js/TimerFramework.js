const Timer = require('./Timer')

module.exports = class TimerFramework {
  constructor(fnc, increment, maxSize, noOfRuns = 50) {
    this.function = fnc
    this.increment = increment
    this.runs = this.runTimer(fnc, increment, maxSize, noOfRuns)
  }

  runTimer(fnc, increment, maxSize, noOfRuns) {
    // const Timer = require('./js/Timer')
    let results = []
    for (let arraySize = 0; arraySize <= maxSize; arraySize += increment) {
      if (arraySize != 0) { results.push(new Timer(fnc, arraySize, noOfRuns)) }
    }
    return results
  }
}