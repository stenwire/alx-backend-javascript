export default function appendToEachArrayValue(array, appendString) {
  const rArray = [];
  for (const value of array) {
    rArray.push(appendString + value);
  }
  return rArray;
}
