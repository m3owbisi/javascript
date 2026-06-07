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
