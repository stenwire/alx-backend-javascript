export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const objID = arr.map((item) => item.id);
    return objID;
  }
  return [];
}
