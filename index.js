const TimerFramework = require('./js/performance/TimerFramework')
const consoleResults = require('./js/helpers/console')
const writeToCSV = require('./js/helpers/csv')

const performanceCheck = new TimerFramework(Array.prototype.sort, 50000, 1000000)
consoleResults(performanceCheck)
writeToCSV(performanceCheck)
