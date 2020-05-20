findDuplicates = require('../../js/algorithms/findDuplicates')

describe('findDuplicates', () => {
  it('returns an empty array when no duplicates', () => {
    expect(findDuplicates(['hey'])).toEqual([])
  })

  it('returns an empty array when array has more than one non-duplicate value', () => {
    expect(findDuplicates(['hey','you'])).toEqual([])
  })

  it('returns array of one when passed array of two duplicates', () => {
    expect(findDuplicates(['hey','hey'])).toEqual(['hey'])
  })

  it('returns array of one when passed two non-consecutive duplicates', () => {
    expect(findDuplicates(['hey','you','hey'])).toEqual(['hey'])
  })

  it('only returns the value once if there is more than one repeat', () => {
    expect(findDuplicates(['hey','you','you','you'])).toEqual(['you'])
  })
})