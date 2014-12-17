
var answer = Math.floor((Math.random() * 100) + 1);
var $feedback = $("#feedback");
var guessLimit = 10;
var currentSubmission;

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
	compare(currentSubmission, answer);
})

$("#play-again").on("click", function() {
	$("#input").val("");
	$feedback.text("Waiting for you to press Submit...");
})