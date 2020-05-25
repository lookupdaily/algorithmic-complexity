const TimerFramework = require('./js/performance/TimerFramework')
const consoleResults = require('./js/helpers/console')
const writeToCSV = require('./js/helpers/csv')
// const RandomArray = require('./js/helpers/RandomArray')

// const myReverse = require('./js/algorithms/reverse')
// const aliceReverse = require('./js/algorithms/working/alicesReverse')
// const myShuffle = require('./js/algorithms/shuffle')
const findDuplicates = require('./js/algorithms/findDuplicates')
// const builtInReverse = arr => { arr.reverse() }

const performanceCheck = new TimerFramework(findDuplicates, 10000, 200000, 50, 'string')
consoleResults(performanceCheck)
writeToCSV(performanceCheck, 'findDuplicatesStrings')

// let random = new RandomArray(1000,'string')

// console.log(findDuplicates(random.array))