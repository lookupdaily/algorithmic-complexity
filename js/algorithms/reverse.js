module.exports = function reverse(array) {
  let newArray = array
  for(let i = 0; i < array.length - 1; i++) {
    // [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]]
    let tempFirst = newArray[i]
    newArray[i] = newArray[i + 1]
    newArray[i + 1] = tempFirst 
    console.log(newArray)
  }
  for(let y = 0; y < array.length - 2; y++) {
    // [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]]
    let newTempFirst = newArray[y]
    newArray[y] = newArray[y + 1]
    newArray[y + 1] = newTempFirst 
    console.log(newArray)
  }
  return newArray
}

//for array of 3:
// [1,2,3]
// [2,1,3]
// [2,3,1]
// [3,2,1]