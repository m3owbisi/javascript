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
