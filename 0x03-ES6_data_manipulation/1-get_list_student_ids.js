export default function getListStudentIds(myArray) {
  if (myArray instanceof Array) {
    const idArray = myArray.map((value) => value.id);
    return idArray;
  }
  return [];
}
