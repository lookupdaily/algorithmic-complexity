  module.exports = function findDuplicates(arr) {
    let object = {}
    let duplicates = []

    // create an object with a count for each time a value appears
    arr.forEach((value) => {
      // if it doesn't exist create a key value pair
      if(!object[value]) {
       object[value] = 0
      }
      // if it does exist push it into duplicates array (only first time)
      if(object[value] == 1) {
        duplicates.push(value)
      }
      // increase the count by one so that duplicates will only be pushed once
      object[value] += 1
    })

    return duplicates
  }