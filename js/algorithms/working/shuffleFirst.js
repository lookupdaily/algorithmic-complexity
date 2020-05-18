module.exports = function shuffle(input) {
  let inputLength = input.length
  let output = []

  for(let i = 0; i < inputLength; i++) {
    let random = Math.floor(Math.random() * input.length)
    let value = input.splice(random,1)
    output.push(value[0])
  }
  return output
}

