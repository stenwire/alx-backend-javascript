export default function updateStudentGradeByCity(myArray, city, newGrades) {
  const updateArray = myArray.filter((value) => {
    if (value.location === city) return true;
    return false;
  }).map((value) => {
    const cpvalue = value;
    for (const newGrade of newGrades) {
      if (value.id === newGrade.studentId) {
        cpvalue.grade = newGrade.grade;
        break;
      } else {
        cpvalue.grade = 'N/A';
      }
    }
    return value;
  });

  return updateArray;
}
