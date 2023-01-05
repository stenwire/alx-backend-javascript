export default function hasValuesFromArray(set, arr) {
  let res = 0;
  for (const item of set) {
    if (arr.includes(item)) {
      res += 1;
    }
  }
  if (res < arr.length) {
    return false;
  }
  return true;
}
