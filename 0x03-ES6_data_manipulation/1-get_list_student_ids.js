/**
 * Retrieves ids from a list of students.
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map((student) => student.id);
}
