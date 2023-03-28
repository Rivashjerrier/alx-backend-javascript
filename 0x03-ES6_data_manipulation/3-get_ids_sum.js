export default function getStudentIdsSum(students) {
  return students.reduce((x, student) => x + student.id, 0);
}
