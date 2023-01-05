export default function (set, value) {
  const newList = [];
  let res = '';
  if (value === '') {
    res = '';
  } else {
    for (const item of set) {
      if (item.includes(value)) {
        newList.push(item.slice(value.length));
      }
    }
    res = newList.join('-');
  }
  return res;
}
