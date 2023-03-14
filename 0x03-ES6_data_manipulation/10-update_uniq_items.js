export default function updateUniqueItems(mymap) {
  if (mymap instanceof Map) {
    mymap.forEach((value, key, thisArg) => {
      if (value === 1) thisArg.set(key, 100);
    });
    return mymap;
  }
  throw Error('Cannot process');
}
