module.exports = function shuffle(input) {
  let output = []

  while(input.length > 0) {
    let random = Math.floor(Math.random() * input.length)
    let item = input[random]
    input[random] = input[input.length - 1]
    input[input.length - 1] = item
    output.push(input.pop())
  }
  return output
}

