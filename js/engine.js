
// initiate variables
var answer = Math.floor((Math.random() * 100) + 1);
var $feedback = $("#feedback");
var guessLimit = 5;
var remainingGuesses = 5;
var previousGuessesArray = [];
var previousGuessesString
var currentSubmission;

// perform upon html page load

$("#guesses").text(remainingGuesses);
$("#feedback").text("Ready to start when you are...");

// functions below

function generateRandomAnswer() {
	answer = Math.floor((Math.random() * 100) + 1);
}

function doesGameContinue() {
  if (remainingGuesses < 1) {
  	$("#guesses").text(remainingGuesses);
  	return false;
  } else {
  	return true;
  }
}

function isSubmissionCorrect(submission, answer) {
	if (submission < answer || submission > answer) {
		return false;
	} else {
		return true;
	}
}

function giveFeedback(submission, answer) {
	if (submission < answer) {
		$feedback.text("Please try a higher number.");
	} else {
		$feedback.text("Please try a lower number.");
	}
}

function updatePreviousGuesses(number) {
	previousGuessesArray.push(number);
	previousGuessesString = previousGuessesArray.join(", ");
	$("#history").text(previousGuessesString);
}

function resetPreviousGuesses() {
	previousGuessesArray = [];
	previousGuessesString = "";
	$("#history").text(previousGuessesString);
}

function decreaseRemainingGuesses() {
	remainingGuesses -= 1;
	$("#guesses").text(remainingGuesses);
}

function endGame(message) {
	$("#submit").hide();
	$("#hint").hide();
	$feedback.text(message);
}

function resetGame(message) {
	remainingGuesses = guessLimit;
	resetPreviousGuesses();
	$("#input").val("");
	$feedback.text(message);
	$("#guesses").text(remainingGuesses);
	$("#submit").show();
	$("#hint").show();
	answer = Math.floor((Math.random() * 100) + 1);
}

// event-driven code below

$("#submit").on("click", function() {
	currentSubmission = $("#input").val();
	updatePreviousGuesses(currentSubmission);
	if (currentSubmission > 0 && currentSubmission <= 100) {
		decreaseRemainingGuesses();
		if (doesGameContinue() === true && isSubmissionCorrect(currentSubmission, answer) === true) {
			endGame("Nice job guessing " + answer + "! Play again?");
		} else if (doesGameContinue() === true && isSubmissionCorrect(currentSubmission, answer) === false) {
			giveFeedback(currentSubmission, answer);
			$("#input").val("");
		} else if (doesGameContinue() === false && isSubmissionCorrect(currentSubmission, answer) === true) {
			endGame("You got " + answer + " on the last go! Play again?");
		} else {
			endGame("Sorry, you lost the game. The correct answer was " + answer + ". Play again?");
		}
	} else {
		$("#input").val("");
		$feedback.text("Please try again - your input must be between 1 and 100.");
	}
});

$("#play-again").on("click", function() {
	resetGame("Ready to start when you are...");
});

$("#hint").on("click", function() {
	endGame("The answer is " + answer + ". Hope you play again!");
});