export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (studentList instanceof Array) {
    return studentList
      .filter(student => student.location === city)
      .map(student => ({
	...student,
        grade: newGrades.filter(grade => grade.studentId === student.id).grade || 'N/A'
      }));
  }
  return [];
}
