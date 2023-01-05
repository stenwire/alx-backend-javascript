import getListStudentIds from './1-get_list_student_ids.js';

export default function getStudentIdsSum(students) {
  const studentsIDs = getListStudentIds(students);
  return studentsIDs.reduce((acc, currentValue) => acc + currentValue, 0);
}
