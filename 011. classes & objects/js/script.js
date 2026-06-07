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

// classes in js
/*
class MyClass {
  constructor () {... }
  myMethod () {...}
}
let myObj = new MyClass();
*/
class Car {
  constructor(brand, mileAge) {
    console.log("creating new object");
    this.brand = brand;
    this.mileAge;
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  setBrand(brand) {
    this.brand = brand;
  }
}
let toyotaCar = new Car();
let fortuner = new Car();
fortuner.setBrand("toyota", 10);
console.log(fortuner);
let lexus = new Car();
lexus.setBrand("toyota", 10);
console.log(lexus);

/*
class myClass {
  constructor(){
    ...
  }
  myMethod(){
    ...
  }
}
*/

// inheritance in js
// class Parent {}
// class Child extends Parent {}
class Parent {
  hello() {
    console.log("hello");
  }
}
class Child extends Parent {}
let obj = new Child();
class Person {
  constructor(name) {
    this.species = "homo-sapiens";
    this.name = name;
    console.log("enter the parent constructor");
  }
  eat() {
    console.log("eating");
  }
  sleep() {
    console.log("sleeping");
  }
  work() {
    console.log("working");
  }
}
class Engineer extends Person {
  work() {
    super.eat();
    super.sleep();
    super.work();
    console.log("coding");
    console.log("solve problems, build something");
  }
}
class Doctor extends Person {
  constructor(clinic) {
    console.log("enter the child constructor");
    super(name); // to invoke parent class constructor
    this.clinic = clinic;
    console.log("exit the child constructor");
  }
}
let shradha = new Engineer("shradha");
let aman = new Doctor("aman");
let p0 = new Person();
let e0 = new Engineer();
let d0 = new Doctor();

// super keyword
// super(args)  // calls parents constructor
// super.parentMethod(args)

// lets practice
/*
qs. you are creating a website for your college.
    create a class user with 2 properties, name & email.
    it also has a method called viewdata() that allows user to view website data.
*/
let data = "secret information";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log(`you are viewing the data : ${data}`);
    console.log(
      `welcome ${this.name}! you are viewing website data. your email is ${this.email}`
    );
  }
}
let student0 = new User("shradha", "shradhakhapra@gmail.com");
let student1 = new User("aman", "amandhattarwal@gmail.com");
let hod = new User("dean", "deancollege@outlook.com");
/*
qs. create a new class called admin which inherits from user.
    add a new method called editdata to admin that allows it to edit website data.
*/
class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    data = "some new information value";
  }
}
let admin = new Admin("admin", "admin@yahoo.com");

// error handling
// try-catch
/*
try{
... normal code
} catch(err){
  // err is error object
  ... handling error
}
*/
let a = 5;
let b = 10;
console.log("a ->", a);
console.log("b ->", b);
try {
  console.log("c ->", c); // error
} catch (err) {
  console.log(err);
}
// console.log("c ->", c); // error
console.log("a + b = ", a + b);
