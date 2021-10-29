// VARS
var startButtonEl = document.getElementById("startBtn");
console.log.here
var currentQuestionIndex = 0;

// create a list of questions and set as an array with properties: index, question, correct answer
var questions = [
    question1("question1", ["answer 1", "answer 2", "answer 3", "answer 4"], answer1),
    question2("question2", ["answer 1", "answer 2", "answer 3", "answer 4"], answer2),
    question3("question3", ["answer 1", "answer 2", "answer 3", "answer 4"], answer3),
    question4("question4", ["answer 1", "answer 2", "answer 3", "answer 4"], answer4),
    question5("question5", ["answer 1", "answer 2", "answer 3", "answer 4"], answer5),
    question6("question6", ["answer 1", "answer 2", "answer 3", "answer 4"], answer6),
    question7("question7", ["answer 1", "answer 2", "answer 3", "answer 4"], answer7),
    question8("question8", ["answer 1", "answer 2", "answer 3", "answer 4"], answer8),
    question9("question9", ["answer 1", "answer 2", "answer 3", "answer 4"], answer9),
    question10("question10", ["answer 1", "answer 2", "answer 3", "answer 4"], answer10)
];
// starts questions at 0
var questionCounter = 0;
// starts timer at 30 seconds
var timer = 30000; 



// FUNCTS
var handleClick = function() {
    console.log("clicked");
}

var quizStart = function() {
    event.preventDefault();

    for(var i = 0; i < 10; i++) {
        document.createElement("")
    }
}

// function to post question and save answer (looped in quizStart())
var question = function(questionI) {

}

var createcurrentQuestionIndex = function() {

    // check if we didn't pass all questions yet
    if (currentQuestionIndexIndex < questions.length) {
        console.log(questions[currentQuestion])

        // create a question element
        // append question element

    }
}

// timer starts at 30 sec and goes down. each finished round adds 10 seconds
var timeLeft = function() {
    var time = event.target.getAttriubte("timer") 
}


// START


// click

// show first question
// if more questions
    // show question
// else
    // end quiz
    // save score to localStorage

// timer begins
