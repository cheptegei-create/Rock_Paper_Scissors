//score board for the game
var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"];
//code for comparison between the user choice and computer choice 
var compare = function (compChoice, userChoice) {
  var upperCaseUserChoices = userChoice.toUpperCase();
  console.log(upperCaseUserChoices);
  if (compChoice === options[0] && upperCaseUserChoices === options[1]) {
    wins++
    window.alert("You Wins!");
  } else if (compChoice === options[0] && upperCaseUserChoices === options[2]) {
    losses++
    window.alert("Computer Wins!");
  } else if (compChoice === options[2] && upperCaseUserChoices === options[0]) {
    wins++
    window.alert("You win!");
  } else if (compChoice === options[2] && upperCaseUserChoices === options[1]) {
    losses++
    window.alert("Coputer wins!");
  } else if (
    (compChoice === options[0] && upperCaseUserChoices === options[0]) ||
    (compChoice === options[1] && upperCaseUserChoices === options[1]) ||
    (compChoice === options[2] && upperCaseUserChoices === options[2])
  ) {
    ties++
    window.alert("You Draw!");
  }
};

var playGame = function () {
  // Ask user for their choice
  var userChoice = window.prompt("Enter R, P, or S:");
//call the compare function to compare the user choice and computer choice
  compare(compChoice(), userChoice);
//alert the score line to the user
if (compare) {
  window.alert("Your score is: " + wins + " wins, " + ties + " ties, " + losses + " losses.");
}
  // Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame();
  }
};

//Computer random choice
var compChoice = function () {
  var randomOptions = options[Math.random() * options.length];

  if (randomOptions === "R") {
    /*ties ++;
    wondow.alert(ties);*/
    return options[0];
  } else if (randomOptions === "P") {
    return options[1];
  } else {
      return options[2];
  }
};

//calling the game function to execute the code
playGame();
