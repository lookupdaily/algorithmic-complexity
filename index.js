const TimerFramework = require('./js/performance/TimerFramework')
const consoleResults = require('./js/helpers/console')
const writeToCSV = require('./js/helpers/csv')

const myReverse = require('./js/algorithms/reverse')
const alicesReverse = require('./js/algorithms/working/alicesReverse')
const myShuffle = require('./js/algorithms/shuffle')
const builtInReverse = arr => { arr.reverse() }

const performanceCheck = new TimerFramework(alicesReverse, 10000, 100000, 20)
consoleResults(performanceCheck)
writeToCSV(performanceCheck, 'myShuffle3')