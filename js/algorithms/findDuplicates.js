  module.exports = function findDuplicates(arr) {
    let existing = []
    let duplicates = []

    arr.forEach((value) => {
      if(existing.includes(value)) {
        duplicates.push(value)
      }
      existing.push(value)
    })

    return duplicates
  }