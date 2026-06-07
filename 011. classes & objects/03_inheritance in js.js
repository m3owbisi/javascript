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
