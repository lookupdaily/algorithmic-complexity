const TimerFramework = require('./js/performance/TimerFramework')
const consoleResults = require('./js/helpers/console')
const writeToCSV = require('./js/helpers/csv')

const myReverse = require('./js/algorithms/reverse')
const myShuffle = require('./js/algorithms/shuffle')
const builtInReverse = arr => { arr.reverse() }

// const performanceCheck = new TimerFramework(myReverse, 10000, 100000)
// consoleResults(performanceCheck)
// writeToCSV(performanceCheck, 'builtInReverse')
console.log(myShuffle([1,2,3,4,5,6,7,8]))