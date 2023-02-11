//Create secret number
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a Number");
var guess = Number(stringGuess);

//check if guess right
if(guess === secretNumber) {
    alert("YOU GOT IT RIGHT!");
}

else if (guess > secretNumber) {
    alert("You guessed to high, Guess again");
}

else {
    alert("You guess too low, Guess again");
}