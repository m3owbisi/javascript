// classes & objects
// prototypes in js
// __proto__
const student = {
  name: "john",
  age: 20,
  mark: 94.4,
  // method
  printMark: function () {
    console.log(`the mark is ${this.mark}`); // student.mark
  },
};
// student.name
// student.age
// student.mark
// student.printMark()
// student
// student.printMark()
// student.toString()
let arr = ["apple", "mango", "banana"];
// arr
// arr.push("litchi");
const employee = {
  calcTax() {
    concole.log("tax rate is 10%");
  },
  calcTax2: function () {
    console.log("tax rate is 20%");
  },
};
const karanArjun = {
  salary: 50000,
  calcTax() {
    console.log("tax rate is 30%");
  },
};
karanArjun.__proto__ = employee;
// karanArjun
// karanArjun.calcTax
// karanArjun.calcTax2
// karanArjun.salary
