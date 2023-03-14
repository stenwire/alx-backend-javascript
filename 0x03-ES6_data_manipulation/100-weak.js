export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) + 1 || 1;
  weakMap.set(endpoint, count);

  if (weakMap.get(endpoint) >= 5) {
    throw Error('Endpoint load is high');
  }
}
