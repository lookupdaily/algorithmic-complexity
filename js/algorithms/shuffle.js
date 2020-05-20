module.exports = function shuffle(input) {
  for(let i = 0; i < input.length; i++) {
    let random = Math.floor(Math.random() * input.length)
    let item = input[i]
    input[i] = input[random]
    input[random] = item
  }
  return input
}

