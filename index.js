const getGroupings = arrList =>
  arrList
    .reduce((combinedArr, arr) => {
      const nextGroupingSet = arr.map(row => row[0])
      const combinedGroupings = new Set([...combinedArr, ...nextGroupingSet])
      return [...combinedGroupings]
    }, [])
    .map(group => [group])

const addNewArrayData = (combinedArray, nextArray, blankValue = 0) =>
  combinedArray.map(row => {
    const groupBy = row[0]
    const matchingNextRow = nextArray.find(nextRow => groupBy === nextRow[0])

    if (matchingNextRow) {
      const rowDataToAdd = matchingNextRow.slice(1)
      return [...row, ...rowDataToAdd]
    } else {
      const zerosToAdd = nextArray[0].slice(1).map(() => blankValue)
      return [...row, ...zerosToAdd]
    }
  })

const arrayCombine = (arrayList, blankValue) => {
  const groupings = getGroupings(arrayList)
  let combinedArray = [...groupings]

  arrayList.forEach(arr => {
    combinedArray = addNewArrayData(combinedArray, arr, blankValue)
  })

  return combinedArray
}

module.exports = {
  getGroupings,
  addNewArrayData,
  arrayCombine
}
