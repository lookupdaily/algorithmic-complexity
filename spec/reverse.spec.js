const reverse = require('../js/algorithms/reverse')

describe('reverse',() => {
  it('returns the same for an array of 1', () => {
    expect(reverse([1])).toEqual([1])
  })

  it('reverses an array of 2', () => {
    expect(reverse([1,2])).toEqual([2,1])
  })
})