// for-in loop
/*
for (let key in objVar) {
  // do some work
}
*/
let objVar = {
  name: "rahul",
  age: 20,
  gender: "male",
  cgpa: "7.73",
  isPass: true,
};
for (let key in objVar) {
  console.log("key =", key); // name, age, gender, cgpa, isPass
  console.log("value =", objVar[key]); // rahul, 20, male, 7.73, true
}
