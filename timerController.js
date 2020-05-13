function printToConsole(timer) {
  console.log(`FUNCTION: ${timer.function}`)
  console.log(`INCREMENT SIZE: ${timer.increment}`)
  console.log(`RESULTS:`)
  timer.runs.forEach((run) => {
  console.log(`${run.arraySize}:`)
  console.log(run.median)
  })
}

const TimerFramework = require('./js/TimerFramework')

// const builtInSort = runTimer(Array.prototype.sort, 10000, 200000)
const builtInReverse = new TimerFramework(Array.prototype.reverse, 10000, 200000)
// const builtInReverse = runTimer(Array.prototype.reverse, 50000, 1000000)
printToConsole(builtInReverse)
