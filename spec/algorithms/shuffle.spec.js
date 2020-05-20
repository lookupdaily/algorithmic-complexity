const shuffle = require('../../js/algorithms/shuffle')

describe('shuffle', () => {
  let shuffled
  it('returns the same for an array of 1', () => {
    expect(shuffle([1])).toEqual([1])
  })

  it('returns the same for an empty array', () => {
    expect(shuffle([])).toEqual([])
  })

  describe('array of 2', () => {
    beforeAll(() => {
      shuffled = shuffle([1,2])
    })

    it('has a length of 2', () => {
      expect(shuffled.length).toEqual(2)
    })

    it('includes the same values', () => {
      expect(shuffled).toEqual(expect.arrayContaining([1,2]))
    })
  })

  describe('array of 3', () => {
    beforeAll(() => {
      shuffled = shuffle([1,2,3])
    })

    it('includes the same values', () => {
      expect(shuffled).toEqual(expect.arrayContaining([1,2,3]))
    })
  })

  describe('longer array in non-numerical order', () => {
    beforeAll(() => {
      shuffled = shuffle([1,7,5,8,4])
    })

    it('includes the same values', () => {
      expect(shuffled).toEqual(expect.arrayContaining([1,7,5,8,4]))
    })

    it('does not exactly match original array', () => {
      expect(shuffled).not.toEqual([1,7,5,8,4])
    })
  })

  describe('longer array of even length', () => {
    beforeAll(() => {
      shuffled = shuffle([1,7,5,8,4,9])
    })

    it('includes the same values', () => {
      expect(shuffled).toEqual(expect.arrayContaining([1,7,5,8,4,9]))
    })

    it('does not exactly match original array', () => {
      expect(shuffled).not.toEqual([1,7,5,8,4,9])
    })
  })

  describe('array of mixed values', () => {
    beforeAll(() => {
      shuffled = shuffle(['hey','you',2,'friend'])
    })

    it('includes the same values', () => {
      expect(shuffled).toEqual(expect.arrayContaining(['hey','you',2,'friend']))
    })

    it('does not exactly match original array', () => {
      expect(shuffled).not.toEqual(['hey','you',2,'friend'])
    })
  })
})