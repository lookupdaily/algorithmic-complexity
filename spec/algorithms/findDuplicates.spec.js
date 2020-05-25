findDuplicates = require('../../js/algorithms/findDuplicates')

describe('findDuplicates', () => {
  // not currently testing for integers as requirements only reference strings
  describe('input: words (strings with one or more chars)', () => {
    it('returns an empty array when no duplicates', () => {
      expect(findDuplicates(['hey'])).toEqual([])
    })
  
    it('returns array of one when passed array with one duplicates', () => {
      expect(findDuplicates(['hey','hey'])).toEqual(['hey'])
    })
  
    it('returns array of one when passed an array with one duplicate and a non-duplicate', () => {
      expect(findDuplicates(['hey','you','hey'])).toEqual(['hey'])
    })
  
    it('only returns the value once if there is more than one repeat of the same value', () => {
      expect(findDuplicates(['hey','you','you','you'])).toEqual(['you'])
    })
  
    it('returns multiple duplicates', () => {
      expect(findDuplicates(['hey','you','you','you','hey','there'])).toEqual(expect.arrayContaining(['hey','you']))
    })
  })
  
  describe('edge cases', () => {
    it('returns empty array when passed no values', () => {
      expect(findDuplicates([])).toEqual([])
    })
  })
})