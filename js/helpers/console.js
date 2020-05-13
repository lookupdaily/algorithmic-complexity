module.exports = function consoleResults(timer) {
  for (let [key, value] of Object.entries(timer)) {
    if (key == 'results') {
      console.log('\n')
      value.forEach((result) => {
        console.log(`${result.arraySize}:`)
        console.log(result.median)
        })
    } else {
      console.log(`${key}: ${value}`);
    }
  }
}