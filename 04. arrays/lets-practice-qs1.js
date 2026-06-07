// lets practice
/*
qs. for a given array with marks of students -> [85, 97, 44, 37, 76, 60]
find the average marks of the entire class.
*/
let stud_marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
// sum = marks_stud[0] + marks_stud[1]
for (let mark of stud_marks) {
  sum += mark;
}
let avg = sum / stud_marks.length;
console.log(`average marks of the students in a class = ${avg}`);
