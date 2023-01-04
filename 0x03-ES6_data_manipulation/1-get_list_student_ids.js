export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const res = Array.prototype.map.call(arr, (id) => id);
    return res;
  }
  const res = [];
  return res;
}
