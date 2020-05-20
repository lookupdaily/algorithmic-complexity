findDuplicates = require('../../js/algorithms/findDuplicates')

describe('findDuplicates', () => {
  it('returns an empty array with no duplicates', () => {
    expect(findDuplicates([1])).toEqual([])
  })
})