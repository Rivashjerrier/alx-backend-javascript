export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((students) => students.id);
  }
  return [];
}
