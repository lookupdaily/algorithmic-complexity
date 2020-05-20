findDuplicates = require('../../js/algorithms/findDuplicates')

describe('findDuplicates', () => {
  it('returns an empty array with no duplicates', () => {
    expect(findDuplicates([1])).toEqual([])
  })

  it('returns [1] when passed [1,1]', () => {
    expect(findDuplicates([1,1])).toEqual([1])
  })

  it('returns [1] when passed [1,2,1]', () => {
    expect(findDuplicates([1,2,1])).toEqual([1])
  })
})