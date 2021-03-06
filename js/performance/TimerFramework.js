const Timer = require('./Timer')

module.exports = class TimerFramework {
  constructor(fnc, increment, maxSize, noOfRuns = 50, dataType = 'integer') {
    this.function = fnc
    this.incrementValue = increment
    this.results = this.runTimer(fnc, increment, maxSize, noOfRuns, dataType)
  }

  runTimer(fnc, increment, maxSize, noOfRuns, dataType) {
    let results = []
    for (let arraySize = 0; arraySize <= maxSize; arraySize += increment) {
      if (arraySize != 0) { 
        let timer = new Timer(fnc, arraySize, noOfRuns, dataType)
        results.push(timer) 
        console.log(timer.median)
      }
    }
    return results
  }
}