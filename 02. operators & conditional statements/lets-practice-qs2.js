// lets practice
/*
qs2. write a code which can give grades to students according to their scores:
      80-100, A
      70-79,  B
      60-69,  C
      50-59,  D
      0-49,   F
*/
let score = prompt("enter your score (0-100):");
let grade;
if (score >= 80 && score <= 100) {
  grade = "A";
  console.log("your grade is A");
} else if (score >= 70 && score <= 79) {
  grade = "B";
  console.log("your grade is B");
} else if (score >= 60 && score <= 69) {
  grade = "C";
  console.log("your grade is C");
} else if (score >= 50 && score <= 59) {
  grade = "D";
  console.log("your grade is D");
} else if (score >= 0 && score <= 49) {
  grade = "F";
  console.log("your grade is F");
} else {
  grade = "invalid";
  console.log("invalid score");
}
console.log("okay according to your scores, your grade was:", grade);
