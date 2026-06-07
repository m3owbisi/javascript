name: "Sergio Almirón";
position: "forward";
number: 1;
isCaptain: false;
nickname: null;
name: "Sergio Batista";
position: "midfielder";
number: 2;
isCaptain: false;
nickname: null;          
const developerObj = {
    name: "Jessica Wilkins",
    isDeveloper: true,
};
// Object destructuring
const { name, isDeveloper } = developerObj;
const greeting = (name = "Anonymous") => {
    return "Hello " + name;
} 
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
function myExampleFunction({ name, age, job, city }) {
}
${expression goes here}