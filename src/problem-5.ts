interface Student {
  name: string;
  age: number;
  grades: number[];
}
function calculateAverageGrade(student: Student) {
  return student.grades.length
    ? student.grades.reduce((sum, number) => sum + number) /
        student.grades.length
    : 0;
}

const student1: Student = {
  name: "Bob",
  age: 17,
  grades: [75, 80, 82, 88, 90],
};

const averageGradeForBob = calculateAverageGrade(student1);
