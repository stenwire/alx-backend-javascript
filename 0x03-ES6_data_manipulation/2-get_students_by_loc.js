export default function getStudentsByLocation(myArray, city) {
  const location = myArray.filter((value) => {
    if (value.location === city) return true;
    return false;
  });
  return location;
}
