const reverse = require('../../js/algorithms/reverse')

describe('reverse',() => {
  it('returns the same for an array of 1', () => {
    expect(reverse([1])).toEqual([1])
  })

  it('reverses an array of 2', () => {
    expect(reverse([1,2])).toEqual([2,1])
  })

  it('reverses an array of 3', () => {
    expect(reverse([1,2,3])).toEqual([3,2,1])
  })

  it('reverses a longer array in non numerical order', () => {
    expect(reverse([1,7,5,8,4])).toEqual([4,8,5,7,1])
  })

  it('reverses a longer array of even length', () => {
    expect(reverse([1,2,3,4,5,6])).toEqual([6,5,4,3,2,1])
  })

  it('returns the same for an empty array', () => {
    expect(reverse([])).toEqual([])
  })

  it('reverses an array of strings', () => {
    expect(reverse(['hey','you','friend'])).toEqual(['friend','you','hey'])
  })

  it('reverses an array of mixed data types', () => {
    expect(reverse([1,'hey',2])).toEqual([2,'hey',1])
  })
})