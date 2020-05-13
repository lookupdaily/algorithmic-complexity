const TimerFramework = require('./js/performance/TimerFramework')
const consoleResults = require('./js/helpers/console')

const performanceCheck = new TimerFramework(Array.prototype.reverse, 10000, 200000)
consoleResults(performanceCheck)
