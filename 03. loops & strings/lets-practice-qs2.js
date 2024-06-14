// lets practice
/*
qs2. create a game where you start with any random game number.
    ask the user to keep guessing the game number until the user enters correct value.
*/
let gameNumber = 25; // Math.floor(Math.random() * 100)
let userNumber = prompt("guess the game number:");
console.log(userNumber);
while (userNumber != gameNumber) {
  // game
  userNumber = prompt(
    "you entered a wrong number, guess the game number again:"
  );
}
console.log("congratulations, you entered the right number:", userNumber);
