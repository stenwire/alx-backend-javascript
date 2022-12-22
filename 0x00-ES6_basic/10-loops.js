export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const idx of array) {
    const value = appendString + idx;
    newArr.push(value);
  }

  return newArr;
}
