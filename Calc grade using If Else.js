function calculateGrade(marks) {
    let totalMarks = 0;

    for (let i = 0; i < marks.length; i++) {
        totalMarks += marks[i];
    }

    let averageMarks = totalMarks / marks.length;

    let grade;
    if (averageMarks >= 90) {
        grade = 'A+';
    } else if (averageMarks >= 80) {
        grade = 'A';
    } else if (averageMarks >= 60) {
        grade = 'B';
    } else if (averageMarks >= 50) {
        grade = 'C';
    } else if (averageMarks >= 40) {
        grade = 'D';
    } else if (averageMarks >= 33) {
        grade = 'E';
    } else {
        grade = 'Failed';
    }

    return {
        totalMarks: totalMarks,
        averageMarks: averageMarks,
        grade: grade
    };
}

const studentMarks = [85, 92, 20, 20, 20];
const result = calculateGrade(studentMarks);

console.log('Total Marks: ' + result.totalMarks);
console.log('Average Marks: ' + result.averageMarks.toFixed(2));
console.log('Grade: ' + result.grade);
