const ObjectsToCsv = require('objects-to-csv')

module.exports = function writeToCSV(timer, filename) {
  const data = formatToColumns(timer)
  new ObjectsToCsv(data).toDisk(`./results/${filename}-${timer.incrementValue}-increment.csv`)
}

function formatToColumns(timer) {
  let data = []
  timer.results.forEach((result) => {
    data.push({
      arraySize: result.arraySize,
      Milliseconds: result.median
    })
  })
  return data
}
