const RandomArray = require('../helpers/RandomArray')
const { performance } = require('perf_hooks');

module.exports = class Timer {
  constructor(fnc, arraySize, nbOfRuns = 1) {
    this.arraySize = arraySize
    this.times = this.calculateTimes(fnc, nbOfRuns)
  }

  calculateTimes(fnc, nbOfRuns) {
    this.runWithoutTimer(fnc, new RandomArray(this.arraySize))
    let times = []
    for(let i = 0; i < nbOfRuns; i++) {
      times.push(this.calculatePerformance(fnc, new RandomArray(this.arraySize))) 
    }
    // console.log(`array size ${this.arraySize}-${times[0]}`)
    return times
  }

  calculatePerformance(fnc, inputArray) {
    const startTime = performance.now()
    fnc(inputArray) 
    const endTime = performance.now()
    return endTime  - startTime
  }

  runWithoutTimer(fnc, inputArray, nbOfRuns = 10) {
    for(let i=0; i < nbOfRuns; i++) {
      fnc(inputArray)
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


