// lets practice
/*
qs. create an array to store companies -> "bloomberg", "microsoft", "uber", "google", "ibm", "netflix"
a. remove the first company from the array
b. remove uber & add ola in its place
c. add amazon at the end
*/
let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1, 1, "ola");
console.log(companies);
companies.push("amazon");
console.log(companies);
