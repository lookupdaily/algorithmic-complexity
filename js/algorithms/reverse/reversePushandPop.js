module.exports = function reverse(input) {
  let inputLength = input.length
  let output = []
  for(let i = 0; i < inputLength; i++) {
    output.push(input.pop())
  }
  return output
}