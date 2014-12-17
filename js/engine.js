
var answer = Math.floor((Math.random() * 100) + 1);
var $feedback = $("#feedback");
var guessLimit = 10;
var currentSubmission;
var previousGuess;

function compare(submission, answer) {
	if (submission < answer) {
		$feedback.text("Your guess is too low!");
	} else if (submission > answer) {
		$feedback.text("Your guess is too high!");
	} else {
		$feedback.text("YOU GOT IT!!!");
	}
}

// Event-driven code below

$("#submit").on("click", function() {
	currentSubmission = $("#input").val();
	if (currentSubmission > 0 && currentSubmission <= 100) {
		compare(currentSubmission, answer);
	} else {
		$("#input").val("");
		$feedback.text("Please try again - your input must be between 1 and 100.");
	}
})

$("#play-again").on("click", function() {
	$("#input").val("");
	$feedback.text("Waiting for you to press Submit...");
})

$("#hint").on("click", function() {
	$("#input").val("");
	$feedback.text("The answer is " + answer + ". Hope you play again!");
})