  module.exports = function findDuplicates(arr) {
    let object = []
    let duplicates = []

    // console.log(arr)

    // create an object with a count for each time a value appears
    arr.forEach((value) => {
      if(object[value] === undefined) {
       object[value] = true
      } else if(object[value] && !duplicates.includes(value)) {
        duplicates.push(value)
      }
    })

    return duplicates
  }