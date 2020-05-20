findDuplicates = require('../../js/algorithms/findDuplicates')

describe('findDuplicates', () => {
  it('returns an empty array when no duplicates', () => {
    expect(findDuplicates(['hey'])).toEqual([])
  })

  it('returns array of one when passed array of two duplicates', () => {
    expect(findDuplicates(['hey','hey'])).toEqual(['hey'])
  })

  it('returns array of one when passed two non-consecutive duplicates', () => {
    expect(findDuplicates(['hey','you','hey'])).toEqual(['hey'])
  })
})