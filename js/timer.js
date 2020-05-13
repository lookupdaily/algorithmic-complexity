const RandomArray = require('./RandomArray')

module.exports = class Timer {
  constructor(fnc, arraySize, nbOfTimes = 1) {
    this.arraySize = arraySize
    this.times = this.runTimerLoop(fnc, nbOfTimes)
  }

  runTimerLoop(fnc, nbOfTimes) {
    this.runWithoutTimer(fnc, new RandomArray(this.arraySize))
    let times = []
    for(let i = 0; i < nbOfTimes; i++) {
      times.push(this.calculateTime(fnc, new RandomArray(this.arraySize))) 
    }
    return times
  }

  calculateTime(fnc, inputArray) {
    const { performance } = require('perf_hooks');
    const startTime = performance.now()
    fnc.apply(inputArray) 
    return performance.now() - startTime
  }

  runWithoutTimer(fnc, inputArray, nbOfTimes = 10) {
    for(let i=0; i < nbOfTimes; i++) {
      fnc.apply(inputArray)
    }
  }

  get average()  {
    const sum = (accumulator, currentValue) => accumulator + currentValue
    const total = this.times.reduce(sum)
    return total / this.times.length
  }

  get median() {
    const sortedTimes = this.times.sort()

    if(sortedTimes % 2 === 0) {
      return (sortedTimes[sortedTimes.length/2] + sortedTimes[sortedTimes.length/2 - 1]) / 2
    }
    return sortedTimes[Math.floor(sortedTimes.length / 2)]
  }
}


