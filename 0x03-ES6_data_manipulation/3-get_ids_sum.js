export default function getStudentIdsSum(studentList) {
  if (studentList instanceof Array) {
    return studentList.reduce((acc, student) => acc + student.id, 0);
  }
  return 0;
}
