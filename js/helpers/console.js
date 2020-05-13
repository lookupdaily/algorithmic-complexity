module.exports = function consoleResults(timer) {
  for (let [key, value] of Object.entries(timer)) {
    if (key == 'runs') {
      console.log('\n')
      value.forEach((run) => {
        console.log(`${run.arraySize}:`)
        console.log(run.median)
        })
    } else {
      console.log(`${key}: ${value}`);
    }
  }
}