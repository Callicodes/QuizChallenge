
/*An array of questions with there answers*/

var questions = [

	['How many states are in the United States?', 50],
	['How many continents are there?', 7],
	['How many legs does an insect have?', 6],

];

function print(message) {
  document.write(message);
}

var correctAnswers = 0; //variable to track correct answers
var question;
var answer;
var response;
var html;

//It's good practice to include all variables at the top of the script so it is all clear all variables used.

for (var i = 0; i < questions.length; i += 1) {
	question = questions[i][0];
	answer = questions[i][1];
	response = parseInt(prompt(question));
	response = (response); //n.b remember parseInt converts the string to a number.
	if (response === answer) {
		correctAnswers += 1;
	}
	
}

html = "You got " + correctAnswers + " question(s) right.";
print(html);
