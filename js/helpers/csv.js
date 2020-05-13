const ObjectsToCsv = require('objects-to-csv')

module.exports = function writeToCSV(timer) {
  const data = formatToColumns(timer)
  new ObjectsToCsv(data).toDisk(`./results/${timer.function}-${timer.incrementValue}.csv`)
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
