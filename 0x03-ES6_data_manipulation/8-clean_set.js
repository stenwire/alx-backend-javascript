export default function cleanSet(myset, startString) {
  const result = [];

  if (typeof startString !== 'string' || !(myset instanceof Set) || !startString) {
    return '';
  }

  myset.forEach((value) => {
    if (value && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  });
  return result.join('-');
}
