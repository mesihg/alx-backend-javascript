const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line);
    const students = lines.map((line) => line.split(','));
    const headers = students.shift();

    console.log(`Number of students: ${students.length}`);

    headers.forEach((header) => {
      const index = headers.indexOf(header);
      const field = students.map((student) => student[index]);
      const uniqueValues = [...new Set(field.filter((item) => item))];
      console.log(`Number of students in ${header}: ${uniqueValues.length}. List: ${uniqueValues.join(', ')}`);
    });
  } catch (error) {
    console.error('Cannot load the database');
  }
};

module.exports = countStudents;
