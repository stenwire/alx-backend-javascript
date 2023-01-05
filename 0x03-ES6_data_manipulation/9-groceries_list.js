export default function () {
  const map = new Map();
  const keys = ['Apples', 'Tomatoes', 'Pasta', 'Rice', 'Banana'];
  const vals = [10, 10, 1, 1, 5];
  keys.forEach((key, index) => {
    const val = vals[index];
    map.set(key, val);
  });
  return map;
}
