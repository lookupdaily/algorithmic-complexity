module.exports = function reverse(arr) {
  let i = 0
  while(i < arr.length / 2) {
    let item = arr[i]
    arr[i] = arr[arr.length - (i+1)]
    arr[arr.length - (i+1)] = item
    i++
  }
  return arr
}

