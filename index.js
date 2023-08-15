let attempts = 5;
let targetNumber = Math.floor(Math.random() * 10) + 1;

function numberGuessingGame(userGuess) {
  if (attempts === 0) {
    return "Sorry, you ran out of attempts. The correct number was: " + targetNumber;
  }

  if (isNaN(userGuess)) {
    return "Invalid input. Please enter a valid number.";
  } else if (userGuess === targetNumber) {
    document.getElementById("replay-button").disabled = false;
    return "Congratulations! You guessed the right number.";
  } else if (userGuess < targetNumber) {
    attempts--;
    return "Too low. Try again! Attempts left: " + attempts;
  } else {
    attempts--;
    return "Too high. Try again! Attempts left: " + attempts;
  }
}

function displayOutput(output) {
  const outputSpan = document.getElementById("result");
  outputSpan.textContent = output;

  // Disable input and buttons when the game is over
  const userGuessInput = document.getElementById("user-guess-input");
  const guessButton = document.getElementById("guess-button");
  const replayButton = document.getElementById("replay-button");

  if (output.includes("Congratulations") || output.includes("Sorry, you ran out of attempts")) {
    userGuessInput.disabled = true;
    guessButton.disabled = true;
    replayButton.disabled = false;
  }
}

function guess() {
  const userGuess = parseInt(document.getElementById("user-guess-input").value);
  const output = numberGuessingGame(userGuess);
  displayOutput(output);
}

function replay() {
  attempts = 5;
  targetNumber = Math.floor(Math.random() * 10) + 1;
  document.getElementById("result").textContent = "";
  document.getElementById("user-guess-input").value = "";
  document.getElementById("user-guess-input").disabled = false;
  document.getElementById("guess-button").disabled = false;
  document.getElementById("replay-button").disabled = true;
}
