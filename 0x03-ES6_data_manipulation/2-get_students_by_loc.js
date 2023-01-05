export default function getStudentsByLocation(students, location) {
  const res = students.filter((student) => student.location === location);
  return res;
}
