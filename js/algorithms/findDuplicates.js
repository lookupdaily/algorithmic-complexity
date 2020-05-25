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

    // loop through object and find values greater than 1
    // this step could be removed to improve efficiency
    for(var prop in object) {
      if(object[prop] > 1) {
        duplicates.push(prop)
      }
    }
    return duplicates
  }