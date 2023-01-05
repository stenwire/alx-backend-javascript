export default function updateUniqueItems(map) {
  // const testMap = new Map();
  if ((map instanceof Map) === false) {
    throw (Error('Cannot process'));
  }
  for (const [key, val] of map) {
    if (val === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
