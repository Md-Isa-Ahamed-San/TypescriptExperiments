"use strict";
function calculateAverageGrade(student) {
    return student.grades.length
        ? student.grades.reduce((sum, number) => sum + number) /
            student.grades.length
        : 0;
}
const student1 = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
};
const averageGradeForBob = calculateAverageGrade(student1);
