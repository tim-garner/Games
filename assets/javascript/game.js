//Create an Array that lists out all options (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z)
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]

//Create variables that hold number of wins,losses, and ties. They start at 0.

var losses = 0;
var wins = 0;
// Create variables for letters guessed and how many guesses they have left.
var lettersGuessed = [];
var guessesLeft = 9;


// Creates variable on webpage for wins,losses, ties to display on screen.

var lossesText = document.getElementById("losses-text");
var winsText = document.getElementById("wins-text");
var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userGuess-text");
var computerChoiceText = document.getElementById("computerChoice-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var letterGuessedtext = document.getElementById("letterGuessed-text");


//This function is run when the user presses a kay.
document.onkeyup = function (event) {
  console.log("I got hee");
  // When user presses a key.
  var userGuess = event.key;
  var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
  lettersGuessed.push(userGuess);


  // Computer randomly chooses a letter. 
  var computerguess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
  computerChoice.push(computerChoice);





  // This will determine who wins and losses. 

  if ((userGuess === "a" || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || userGuess === "e" || userGuess === "f" || userGuess === "f" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" || userGuess === "z")) {
    if (userGuess === computerChoice) {
      wins++;
      resetGame()
    } else {
      guessesLeft--;
    }
    if (guessesLeft === 0) {
      losses++;
      resetGame()
    }
  }

  function resetGame() {
    guessesLeft = 9;

  }



  //Shows Users guess and Computers guess. Also shows wins/losses. 
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  userGuessText.textContent = "You Chose " + userGuess;
  letterGuessedtext.textContent = "You picked " + lettersGuessed;

};