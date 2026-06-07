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
