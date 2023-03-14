export default function getStudentIdsSum(myArray) {
  const sumIds = myArray.map((value) => value.id).reduce((prevVal, curVal) => prevVal + curVal, 0);
  return sumIds;
}
