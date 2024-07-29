/**
 * Retrieves students in a given location.
 */
export default function getStudentsByLocation(studentsList, city) {
  return studentsList.filter((list) => list.location === city);
}
