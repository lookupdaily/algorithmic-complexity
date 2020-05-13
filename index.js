const TimerFramework = require('./js/performance/TimerFramework')
const consoleResults = require('./js/helpers/console')
const writeToCSV = require('./js/helpers/csv')

const performanceCheck = new TimerFramework(Array.prototype.reverse, 10000, 200000)
writeToCSV(performanceCheck)
consoleResults(performanceCheck)
