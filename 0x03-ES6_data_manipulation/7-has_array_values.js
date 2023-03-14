export default function hasValuesFromArray(myset, myarray) {
  for (const arr of myarray) {
    if (!myset.has(arr)) return false;
  }
  return true;
}
