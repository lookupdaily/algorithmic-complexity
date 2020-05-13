module.exports = function reverse(array) {
  if (array.length === 1) {
    return array
  }
  return [array[0], array[1]] = [array[1], array[0]]
}