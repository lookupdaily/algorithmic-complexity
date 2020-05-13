function runTimer(fnc, increment = 10000, finalSize = 200000, noOfRuns = 50) {
  const Timer = require('./js/timer')
  for (let arraySize = 0; arraySize <= finalSize; arraySize += increment) {
    let timer = new Timer(fnc, arraySize, noOfRuns)
    console.log(`Array size: ${arraySize}`)
    // console.log('Avg value:')
    // console.log(run.timer.average)
    // console.log('Median value:')
    console.log(timer.median)
  }
}


function printResults(resultsArray) {
  resultsArray.forEach((run) => {
    console.log(`Array size: ${run.size}`)
    console.log('Avg value:')
    console.log(run.timer.average)
    console.log('Median value:')
    console.log(run.timer.median)
  })
}


const builtInSort = runTimer(Array.prototype.sort)
