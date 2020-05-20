module.exports = function reverse(arr) {
  new_arr = []
  for (let i = 0; i < arr.length; i++) {
      new_arr.unshift(arr[i])
  }
  return new_arr;    
}