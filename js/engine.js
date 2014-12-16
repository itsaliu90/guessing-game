$(document).ready(function() {
	var answer = Math.floor((Math.random() * 100) + 1);
	var currentSubmission;

	function compare(submission, answer) {
		if (submission < answer) {
			$("#feedback").text("Your guess is too low, bro!");
		} else if (submission > answer) {
			$("#feedback").text("Your guess is too high, pie!");
		} else {
			$("#feedback").text("YOU GOT IT!!!");
		}
	}

	// Event-driven code below

	$("#submit").on("click", function() {
		currentSubmission = $("#input").val();
		compare(currentSubmission, answer);
	})
});