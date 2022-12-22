export default function concatArrays(array1, array2, string) {
  const res = [...array1, ...array2, ...string];
  return res;
}
