module.exports = function reverse(input) {
  let i = 0
  while(i < input.length / 2) {
    let item = input[i]
    input[i] = input[input.length - (i+1)]
    input[input.length - (i+1)] = item
    i++
  }
  return input
}

