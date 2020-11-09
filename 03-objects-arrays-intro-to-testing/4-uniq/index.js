/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  let uniqValuesSet = new Set(arr);
  let resultArray = [];

  if (!Array.isArray(arr) || arr.length === 0) {
    return resultArray;
  }

  for (let value of uniqValuesSet) {
    resultArray.push(value);
  }

  return resultArray;
}
