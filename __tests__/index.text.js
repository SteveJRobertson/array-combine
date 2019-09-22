const { getGroupings, arrayCombine, addNewArrayData } = require('../index')

const mockArrayData = [
  [['test1', 12], ['test2', 23], ['test3', 653], ['test4', 584]],
  [['test1', 45], ['test3', 88], ['test4', 78], ['test5', 567]]
]

const mockCombinedArray = [
  ['test1', 12, 45],
  ['test2', 23, 0],
  ['test3', 653, 88],
  ['test4', 584, 78],
  ['test5', 0, 567]
]

describe('getGroupings', () => {
  it('returns an array of grouping names', () => {
    const groupings = getGroupings(mockArrayData)

    expect(groupings).toEqual([
      ['test1'],
      ['test2'],
      ['test3'],
      ['test4'],
      ['test5']
    ])
  })
})

describe('addNewArrayData', () => {
  const mockCombined = [['test1'], ['test2'], ['test3'], ['test4'], ['test5']]

  const mockNext = [
    ['test1', 12],
    ['test2', 23],
    ['test3', 653],
    ['test4', 584]
  ]

  it('adds new data to the combined array', () => {
    const newCombinedArray = addNewArrayData(mockCombined, mockNext)

    expect(newCombinedArray).toEqual([
      ['test1', 12],
      ['test2', 23],
      ['test3', 653],
      ['test4', 584],
      ['test5', 0]
    ])
  })
})

describe('arrayCombine module', () => {
  it('creates a new array from the combined data', () => {
    const combinedArray = arrayCombine(mockArrayData)

    expect(combinedArray).toEqual(mockCombinedArray)
  })

  it('creates a new array from the combined data with a custom blank value', () => {
    const blankValue = '-'
    const combinedArray = arrayCombine(mockArrayData, blankValue)

    expect(combinedArray).toEqual([
      ['test1', 12, 45],
      ['test2', 23, '-'],
      ['test3', 653, 88],
      ['test4', 584, 78],
      ['test5', '-', 567]
    ])
  })
})
