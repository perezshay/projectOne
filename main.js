// Quiz Greeting
var Greeting = "Hello! Welcome to my quiz!";
document.querySelector(".Greeting").innerHTML = Greeting;

// Function for scoring
function getScore() {
	// These variables search the HTML document by their id, name, and value
	var question0 = document.quiz.question0.value;
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var correctAnswer = 0;

// Concatenate Correct Answers. Use "==" because one "=" is used to define a variable. Each correct answer is labeled by A, B, or C responses
if (question0 == "A") {
	correctAnswer++;
}
if (question1 == "B") {
	correctAnswer++;
}

if (question2 == "A") {
	correctAnswer++;
}

if (question3 == "B") {
	correctAnswer++;
}

if (question4 == "B") {
	correctAnswer++;
}

if (question5 == "A") {
	correctAnswer++;
}

if (question6 == "B") {
	correctAnswer++;
}

if (question7 == "A") {
	correctAnswer++;
}

if (question8 == "B") {
	correctAnswer++;
}

if (question9 == "C") {
	correctAnswer++;
}

// Using getElementById to hide final results. Pushed to HTML by onclick (found in the HTML) 
document.getElementById("hide").style.visibility = "visible";

// Using getElementById here will show the person's score out of correct answers
document.getElementById("numCorrect").innerHTML = "Your score is" + " " + correctAnswer + " " + "out of 10 correct!";
}