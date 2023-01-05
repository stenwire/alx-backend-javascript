export default function updateStudentGradeByCity(students, location, grades) {
  const idFromGrade = grades.map((grade) => (grade.studentId));
  const gradeFromGrade = grades.map((grade) => (grade.grade));
  gradeFromGrade.sort();
  const newStudentsList = students.filter((student) => student.location === location);
  for (let index = 0; index < newStudentsList.length; index += 1) {
    if (gradeFromGrade.length === 1) {
      newStudentsList[index].grade = parseInt(`${gradeFromGrade}`, 10);
    }
    if (!(idFromGrade.includes(newStudentsList[index].id))) {
      newStudentsList[index].grade = 'N/A';
    }
    if (idFromGrade.includes(newStudentsList[index].id)) {
      if (gradeFromGrade.length >= newStudentsList.length) {
        newStudentsList[index].grade = gradeFromGrade[index];
      }
    }
  }
  return (newStudentsList);
}
