const ObjectsToCsv = require('objects-to-csv')

module.exports = function writeToCSV(results) {
  const data = formatToColumns(results)
  new ObjectsToCsv(data).toDisk('./results/test.csv')
}

function formatToColumns(results) {
  let data = []
  results.forEach((result) => {
    data.push({
      arraySize: result.arraySize,
      Milliseconds: result.median
    })
  })
  return data
}
