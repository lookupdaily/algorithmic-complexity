module.exports = function reverse(array) {
  for(let i = 0; i < array.length; i++) {
    let item = array[i]
    for(let next = i + 1; next < array.length; next++) {
      array[i] = array[next]
      array[next] = item
      item = array[i]
    }
  }
  return array
}