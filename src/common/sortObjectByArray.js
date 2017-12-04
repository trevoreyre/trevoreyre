// Sorts an array of objects on specified key, in the same order
// as sortArry. Keys that aren't included in sortArry are added
// to the end of the resulting array.
const sortObjectByArray = (obj, key, sortArry) => {
  let ordered = []
  sortArry.forEach(sortKey => {
    let found = obj.filter(o => o[key] === sortKey)
    if (found.length === 1) {
      ordered.push(found[0])
    }
  })
  obj.forEach(o => {
    if (!sortArry.includes(o[key])) {
      ordered.push(o)
    }
  })
  return ordered
}

export default sortObjectByArray
