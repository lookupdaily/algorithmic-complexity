  module.exports = function findDuplicates(arr) {
    let object = []
    let duplicates = []

    // create an object with a count for each time a value appears
    arr.forEach((value) => {
      if(!object[value]) {
       object[value] = 0
      }
      object[value] += 1
    })

    // search object and find values greater than 1
    for(var prop in object) {
      if(object[prop] > 1) {
        duplicates.push(prop)
      }
    }
    return duplicates
  }